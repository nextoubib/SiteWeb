"use server";

import { demoRequestSchema, type DemoActionState, type DemoRequest } from "./demo-schema";
import { deliverDemoRequest } from "@/lib/demo-delivery";

/**
 * Server Action handling the demo request form. Validates with Zod, ignores
 * bots (honeypot), forwards to the configured delivery adapter.
 */
export async function submitDemoRequest(
  _previous: DemoActionState,
  formData: FormData,
): Promise<DemoActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = demoRequestSchema.safeParse({
    ...raw,
    consent: raw.consent === "on" || raw.consent === "true" ? true : undefined,
  });

  if (!parsed.success) {
    const fieldErrors: DemoActionState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof DemoRequest | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Certains champs sont invalides. Merci de les vérifier.",
      fieldErrors,
    };
  }

  // Honeypot filled → silently accept without delivering.
  if (parsed.data.website) {
    return { status: "success" };
  }

  try {
    await deliverDemoRequest(parsed.data);
    return { status: "success" };
  } catch (error) {
    console.error(
      "[demo] delivery failed",
      error instanceof Error ? error.message : error,
    );
    return {
      status: "error",
      message:
        "Votre demande n'a pas pu être transmise. Merci de réessayer dans quelques instants.",
    };
  }
}
