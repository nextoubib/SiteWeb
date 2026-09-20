import {
  Activity,
  BadgeCheck,
  BriefcaseMedical,
  CalendarDays,
  ClipboardList,
  FileHeart,
  FileSignature,
  FileText,
  FlaskConical,
  HeartPulse,
  Mic,
  Package,
  PieChart,
  Pill,
  QrCode,
  Receipt,
  Ruler,
  ScanLine,
  Smartphone,
  Sparkles,
  Stethoscope,
  Thermometer,
  Upload,
  UserRound,
  Users,
  Weight,
  Wind,
} from "lucide-react";
import type { Feature, WorkflowStep } from "@/types";

export const nextoubibPillars: Feature[] = [
  {
    title: "Consultation par dictée",
    description:
      "Le médecin dicte sa consultation. L'IA structure motif, antécédents, examen clinique, diagnostic et conduite à tenir dans le dossier médical. La saisie manuelle devient l'exception.",
    icon: Mic,
  },
  {
    title: "Ordonnances assistées",
    description:
      "Génération assistée des ordonnances en tenant compte du contexte patient et des référentiels disponibles. Le médecin reste décisionnaire.",
    icon: Pill,
  },
  {
    title: "Documents médicaux",
    description:
      "Certificats, arrêts de travail, lettres de liaison, demandes d'examens et documents courants générés avec votre validation.",
    icon: FileSignature,
  },
  {
    title: "QR Scan",
    description:
      "Votre smartphone devient le scanner de votre cabinet : bilans, ECG, ordonnances et documents externes rejoignent le dossier patient en quelques secondes.",
    icon: QrCode,
  },
  {
    title: "OCR et vision IA",
    description:
      "Extraction assistée des valeurs depuis les résultats biologiques, les tableaux et les documents scannés. Assistance à l'interprétation, jamais diagnostic automatique.",
    icon: ScanLine,
  },
  {
    title: "Triage infirmier",
    description:
      "Constantes et motif de consultation saisis avant l'entrée du patient, disponibles immédiatement dans le dossier.",
    icon: HeartPulse,
  },
];

export const qrScanSteps: WorkflowStep[] = [
  {
    label: "Le médecin ouvre le patient",
    description: "Dans Nextoubib, sur son poste.",
    icon: UserRound,
  },
  {
    label: "Nextoubib génère un QR Code",
    description: "Lié au dossier patient ouvert.",
    icon: QrCode,
  },
  {
    label: "Le médecin le scanne",
    description: "Avec l'appareil photo de son téléphone.",
    icon: Smartphone,
  },
  {
    label: "Il photographie le document",
    description: "Bilan, ECG, ordonnance, document externe.",
    icon: ScanLine,
  },
  {
    label: "Le fichier rejoint le dossier",
    description: "Envoi direct, sans câble ni e-mail.",
    icon: Upload,
  },
  {
    label: "Nextoubib peut le traiter",
    description: "OCR, extraction, classement.",
    icon: Sparkles,
  },
];

export const qrScanDocumentTypes = [
  "Bilan biologique",
  "ECG",
  "Ordonnance",
  "Document externe",
  "Examen complémentaire",
] as const;

export const ocrSources: Feature[] = [
  {
    title: "Résultats biologiques",
    description: "Valeurs, unités et normes extraites du compte rendu du laboratoire.",
    icon: FlaskConical,
  },
  {
    title: "Tableaux",
    description: "Lecture de tableaux de résultats et de suivis.",
    icon: ClipboardList,
  },
  {
    title: "Documents",
    description: "Lettres, comptes rendus externes, courriers.",
    icon: FileText,
  },
  {
    title: "ECG",
    description: "Assistance à l'interprétation, lorsque la fonction est activée.",
    icon: Activity,
  },
];

export const triageVitals = [
  { label: "Tension artérielle", icon: Activity },
  { label: "Température", icon: Thermometer },
  { label: "Fréquence cardiaque", icon: HeartPulse },
  { label: "Saturation", icon: Wind },
  { label: "Poids", icon: Weight },
  { label: "Taille", icon: Ruler },
  { label: "Motif de consultation", icon: ClipboardList },
] as const;

export type TimelineEntry = {
  date: string;
  type: string;
  title: string;
  detail: string;
  icon: typeof Stethoscope;
  tone?: "default" | "alert";
};

/** Illustrative timeline for the product mockup (fictitious patient). */
export const patientTimeline: TimelineEntry[] = [
  {
    date: "Aujourd'hui",
    type: "Consultation",
    title: "Consultation dictée",
    detail: "Motif, examen clinique et conduite à tenir structurés par l'IA.",
    icon: Mic,
  },
  {
    date: "Aujourd'hui",
    type: "Ordonnance",
    title: "Ordonnance générée",
    detail: "Assistée, relue et signée par le médecin.",
    icon: Pill,
  },
  {
    date: "Il y a 3 jours",
    type: "Document",
    title: "Bilan biologique via QR Scan",
    detail: "Valeurs extraites par OCR et rapprochées de l'historique.",
    icon: FlaskConical,
  },
  {
    date: "Il y a 1 mois",
    type: "Constantes",
    title: "Triage infirmier",
    detail: "Tension, température, saturation, poids, taille.",
    icon: HeartPulse,
  },
  {
    date: "Antécédents",
    type: "Allergie",
    title: "Allergie documentée",
    detail: "Affichée en permanence dans l'en-tête du dossier.",
    icon: FileHeart,
    tone: "alert",
  },
];

export const patientRecordSections = [
  "Consultations",
  "Antécédents",
  "Allergies",
  "Traitements",
  "Ordonnances",
  "Examens",
  "Documents",
  "Constantes",
] as const;

export const cabinetModules: Feature[] = [
  {
    title: "Rendez-vous et agenda",
    description: "Planning du cabinet et convocations.",
    icon: CalendarDays,
  },
  { title: "Patients", description: "Base patients et dossiers.", icon: Users },
  {
    title: "Facturation",
    description: "Actes, notes d'honoraires et encaissements.",
    icon: Receipt,
  },
  {
    title: "CNAM",
    description:
      "Prise en charge des flux de l'assurance maladie tunisienne lorsque disponible.",
    icon: BadgeCheck,
  },
  {
    title: "Actes",
    description: "Nomenclature et cotation des actes.",
    icon: BriefcaseMedical,
  },
  {
    title: "Stock",
    description: "Consommables et alertes de réapprovisionnement.",
    icon: Package,
  },
  {
    title: "Statistiques",
    description: "Activité, recettes et suivi du cabinet.",
    icon: PieChart,
  },
];

export const prescriptionCountries = [
  "Tunisie",
  "Algérie",
  "France",
  "Maroc",
  "Libye",
  "États-Unis",
] as const;

export const documentTypes = [
  "Certificats médicaux",
  "Arrêts de travail",
  "Lettres de liaison",
  "Demandes d'examens",
  "Documents courants",
] as const;
