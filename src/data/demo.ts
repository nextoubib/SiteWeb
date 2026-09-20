export const demoProducts = [
  { value: "nexrad-ai", label: "Nexrad AI" },
  { value: "nexrad-ris", label: "Nexrad RIS" },
  { value: "nexrad-bridge", label: "Nexrad Bridge" },
  { value: "nextoubib", label: "Nextoubib" },
  { value: "etablissement", label: "Offre établissement" },
] as const;

export const demoProfessions = [
  "Radiologue",
  "Médecin généraliste",
  "Médecin spécialiste",
  "Manipulateur / technicien",
  "Responsable de centre d'imagerie",
  "Direction d'établissement / DSI",
  "Infirmier(ère)",
  "Autre",
] as const;

export const demoCountries = [
  "Tunisie",
  "Algérie",
  "Maroc",
  "Libye",
  "France",
  "États-Unis",
  "Autre",
] as const;

export type DemoProductValue = (typeof demoProducts)[number]["value"];
