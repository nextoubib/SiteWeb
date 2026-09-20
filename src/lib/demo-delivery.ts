import "server-only";
import type { DemoRequest } from "@/components/forms/demo-schema";

/**
 * Delivery layer for demo requests.
 *
 * No e-mail service is bundled on purpose: this adapter forwards the request
 * as JSON to an optional webhook (CRM, Zapier/Make/n8n, Salesforce, custom
 * API). Without `DEMO_WEBHOOK_URL`, the request is logged server-side only.
 * Add new destinations by implementing `DemoDeliveryAdapter`.
 */
export type DemoDeliveryAdapter = {
  name: string;
  deliver(payload: DemoRequest & { receivedAt: string; source: string }): Promise<void>;
};

const webhookAdapter: DemoDeliveryAdapter = {
  name: "webhook",
  async deliver(payload) {
    const url = process.env.DEMO_WEBHOOK_URL;
    if (!url) return;

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const token = process.env.DEMO_WEBHOOK_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }
  },
};

const logAdapter: DemoDeliveryAdapter = {
  name: "log",
  async deliver(payload) {
    // Never log personal data in production; only a trace that a request came in.
    console.info(
      `[demo] request received for ${payload.product} at ${payload.receivedAt}`,
    );
  },
};

const adapters: DemoDeliveryAdapter[] = process.env.DEMO_WEBHOOK_URL
  ? [webhookAdapter]
  : [logAdapter];

export async function deliverDemoRequest(request: DemoRequest) {
  const payload = {
    ...request,
    website: undefined,
    receivedAt: new Date().toISOString(),
    source: "nexrad-website",
  };
  await Promise.all(adapters.map((adapter) => adapter.deliver(payload)));
}
