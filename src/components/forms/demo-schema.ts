import { z } from "zod";
import { demoCountries, demoProducts, demoProfessions } from "@/data/demo";

const productValues = demoProducts.map((p) => p.value) as [string, ...string[]];

export const demoRequestSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom requis (2 caractères minimum).").max(80),
  lastName: z.string().trim().min(2, "Nom requis (2 caractères minimum).").max(80),
  profession: z.enum(demoProfessions, { message: "Sélectionnez votre profession." }),
  organization: z.string().trim().min(2, "Établissement ou cabinet requis.").max(120),
  country: z.enum(demoCountries, { message: "Sélectionnez votre pays." }),
  email: z.email({ message: "Adresse e-mail invalide." }).max(160),
  phone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone requis.")
    .max(30)
    .regex(/^[+\d][\d\s().-]{5,}$/, "Numéro de téléphone invalide."),
  product: z.enum(productValues, { message: "Sélectionnez un produit." }),
  message: z
    .string()
    .trim()
    .max(2000, "Message trop long (2000 caractères maximum).")
    .optional()
    .or(z.literal("")),
  /** Honeypot: must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
  consent: z.literal(true, {
    message: "Votre accord est nécessaire pour être recontacté.",
  }),
});

export type DemoRequestInput = z.input<typeof demoRequestSchema>;
export type DemoRequest = z.output<typeof demoRequestSchema>;

export type DemoActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof DemoRequest, string>>;
};
