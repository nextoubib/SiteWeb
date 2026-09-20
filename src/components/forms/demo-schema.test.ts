import { demoRequestSchema } from "./demo-schema";

const valid = {
  firstName: "Amel",
  lastName: "Ben Salah",
  profession: "Radiologue",
  organization: "Centre d'imagerie",
  country: "Tunisie",
  email: "amel@example.org",
  phone: "+216 12 345 678",
  product: "nexrad-ai",
  message: "",
  website: "",
  consent: true,
};

describe("demoRequestSchema", () => {
  it("accepts a complete request", () => {
    const result = demoRequestSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid e-mail and phone", () => {
    const result = demoRequestSchema.safeParse({ ...valid, email: "nope", phone: "abc" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path[0]);
      expect(paths).toContain("email");
      expect(paths).toContain("phone");
    }
  });

  it("requires consent and a known product", () => {
    const result = demoRequestSchema.safeParse({
      ...valid,
      consent: false,
      product: "unknown",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path[0]);
      expect(paths).toContain("consent");
      expect(paths).toContain("product");
    }
  });

  it("rejects a filled honeypot", () => {
    const result = demoRequestSchema.safeParse({ ...valid, website: "http://spam" });
    expect(result.success).toBe(false);
  });
});
