import {
  Activity,
  ArrowRightLeft,
  BadgeCheck,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  Database,
  DoorOpen,
  FileAudio,
  FileCheck2,
  FileSearch,
  FileText,
  Gauge,
  HardDrive,
  Keyboard,
  Layers,
  LayoutDashboard,
  Library,
  ListChecks,
  Mic,
  MonitorPlay,
  MousePointerClick,
  Network,
  Package,
  PenLine,
  PieChart,
  Radio,
  Receipt,
  Ruler,
  ScanSearch,
  Send,
  Sparkles,
  Stethoscope,
  UserPlus,
  Users,
  Wallet,
  Wand2,
  Waves,
  Zap,
} from "lucide-react";
import type { Feature, WorkflowStep } from "@/types";

/* ---------------------------------------------------------------- */
/* Radiology landing                                                  */
/* ---------------------------------------------------------------- */

export const radiologyWorkflow: WorkflowStep[] = [
  { label: "Patient", description: "Arrivée ou rendez-vous", icon: Users },
  { label: "Réception RIS", description: "Admission et dossier", icon: DoorOpen },
  { label: "Worklist", description: "DICOM MWL vers la modalité", icon: ClipboardList },
  { label: "Modalité", description: "Scanner, IRM, RX, échographie", icon: Radio },
  { label: "PACS", description: "Stockage des examens", icon: Database },
  { label: "Viewer", description: "Lecture des séries", icon: MonitorPlay },
  { label: "Dictée IA", description: "Nexrad AI ou Bridge", icon: Mic },
  { label: "Validation", description: "Relecture par le radiologue", icon: BadgeCheck },
  { label: "Compte rendu", description: "Structuré, signé, diffusé", icon: FileCheck2 },
];

export const radiologyModules: Feature[] = [
  {
    title: "PACS",
    description:
      "Stockage et archivage des examens, worklist et intégration au RIS. Architecture s'appuyant sur le serveur open source Orthanc lorsque c'est pertinent.",
    icon: Database,
  },
  {
    title: "Viewer web",
    description:
      "Consultation DICOM dans le navigateur : images, séries, comparaison, intégrée au workflow de compte rendu. Basé sur OHIF lorsque l'architecture le permet.",
    icon: MonitorPlay,
  },
  {
    title: "DICOM Worklist",
    description:
      "Le RIS publie la worklist DICOM MWL : les modalités récupèrent l'identité du patient et l'examen sans ressaisie.",
    icon: Layers,
  },
  {
    title: "HL7",
    description:
      "Messages ADT, ORM et ORU pour dialoguer avec le système d'information hospitalier et les logiciels tiers.",
    icon: Network,
  },
  {
    title: "Dictée IA",
    description:
      "Nexrad AI dans le RIS, ou Nexrad Bridge dans vos logiciels existants : un même moteur, quatre modes de dictée.",
    icon: FileAudio,
  },
  {
    title: "Outils radiologiques",
    description:
      "Calculateurs, modèles de comptes rendus, suivi RECIST et Cheson, formulaires d'échographie rapide.",
    icon: Calculator,
  },
];

/* ---------------------------------------------------------------- */
/* Nexrad AI                                                          */
/* ---------------------------------------------------------------- */

export type DictationMode = {
  id: "brut" | "grand-titre" | "secretaire" | "mixte";
  name: string;
  summary: string;
  description: string;
  rule: string;
  icon: typeof Mic;
  /** Example dictation and result shown in the mode demo. */
  example: {
    input: string;
    outputTitle: string;
    output: string[];
  };
  strengths: string[];
};

export const dictationModes: DictationMode[] = [
  {
    id: "brut",
    name: "Mode Brut",
    summary: "Transcription fidèle, mot à mot.",
    description:
      "Le texte dicté est retranscrit tel quel. Aucune reformulation, aucune structuration, aucune extrapolation : vous conservez le contrôle total du contenu.",
    rule: "Aucune extrapolation.",
    icon: Keyboard,
    example: {
      input:
        "scanner abdomino-pelvien sans et avec injection foie de taille normale lésion hypodense segment six vingt-cinq millimètres rehaussement en mottes périphériques",
      outputTitle: "Transcription",
      output: [
        "scanner abdomino-pelvien sans et avec injection foie de taille normale lésion hypodense segment six vingt-cinq millimètres rehaussement en mottes périphériques",
      ],
    },
    strengths: [
      "Fidélité totale",
      "Aucune interprétation",
      "Idéal pour la relecture stricte",
    ],
  },
  {
    id: "grand-titre",
    name: "Mode Grand titre",
    summary: "Quelques observations, un compte rendu complet.",
    description:
      "Vous donnez l'essentiel : la modalité, la région et les observations clés. Nexrad AI construit un compte rendu radiologique structuré et enrichi sur le plan sémiologique.",
    rule: "Structuration, sémiologie, rapidité.",
    icon: Wand2,
    example: {
      input: "Angiome hépatique segment VI 25 mm",
      outputTitle: "Compte rendu structuré",
      output: [
        "Technique : acquisition abdominale sans puis avec injection de produit de contraste, aux temps artériel, portal et tardif.",
        "Résultats : formation du segment VI hépatique mesurant 25 mm, hypodense avant injection, présentant un rehaussement en mottes périphériques discontinu avec remplissage centripète progressif.",
        "Conclusion : aspect typique d'angiome hépatique du segment VI de 25 mm. Pas d'autre anomalie décelable.",
      ],
    },
    strengths: ["Compte rendu structuré", "Sémiologie enrichie", "Gain de temps maximal"],
  },
  {
    id: "secretaire",
    name: "Mode Secrétaire",
    summary: "Correction et mise en forme, contenu inchangé.",
    description:
      "Orthographe, syntaxe, ponctuation et mise en forme sont corrigées comme le ferait une secrétaire médicale. Le contenu clinique reste rigoureusement fidèle à votre dictée.",
    rule: "Aucune extrapolation clinique. Contenu 100 % fidèle à la dictée.",
    icon: PenLine,
    example: {
      input:
        "scanner abdomino-pelvien sans et avec injection foie de taille normale lésion hypodense segment six vingt-cinq millimètres rehaussement en mottes périphériques",
      outputTitle: "Texte corrigé",
      output: [
        "Scanner abdomino-pelvien sans et avec injection.",
        "Foie de taille normale. Lésion hypodense du segment VI de 25 mm, avec rehaussement en mottes périphériques.",
      ],
    },
    strengths: [
      "Orthographe et syntaxe",
      "Ponctuation et mise en forme",
      "Aucune extrapolation",
    ],
  },
  {
    id: "mixte",
    name: "Mode Mixte",
    summary: "Fidélité du texte dicté, enrichissement maîtrisé.",
    description:
      "Combinaison intelligente : le texte dicté est conservé fidèlement, puis structuré, enrichi et synthétisé dans une conclusion claire.",
    rule: "Texte fidèle, enrichissement, structuration, synthèse.",
    icon: Sparkles,
    example: {
      input:
        "scanner abdomino-pelvien foie normal lésion hypodense segment six vingt-cinq millimètres rehaussement en mottes périphériques évoquant un angiome",
      outputTitle: "Compte rendu mixte",
      output: [
        "Résultats : foie de taille normale. Lésion hypodense du segment VI de 25 mm, avec rehaussement en mottes périphériques, évoquant un angiome.",
        "Conclusion : aspect en faveur d'un angiome hépatique du segment VI de 25 mm.",
      ],
    },
    strengths: [
      "Texte dicté préservé",
      "Structuration automatique",
      "Synthèse en conclusion",
    ],
  },
];

export const aiCapabilities: Feature[] = [
  {
    title: "Assistance au diagnostic différentiel",
    description:
      "À partir d'une description sémiologique, Nexrad AI propose des hypothèses de diagnostic différentiel. Une assistance à la décision médicale, jamais un diagnostic autonome.",
    icon: ScanSearch,
  },
  {
    title: "Bibliothèque de modèles",
    description:
      "Modèles de comptes rendus normaux et pathologiques pour le scanner, l'IRM, l'échographie et la radiographie, personnalisables à votre style.",
    icon: Library,
  },
  {
    title: "Suivi oncologique RECIST et Cheson",
    description:
      "Mesure des cibles, comparaison avec l'examen antérieur, suivi dans le temps et classification de la réponse thérapeutique.",
    icon: Ruler,
  },
  {
    title: "Mode Écho rapide",
    description:
      "Formulaires rapides pour les examens à forte récurrence : sein et BI-RADS, thyroïde et TI-RADS, IRM lombaire.",
    icon: Waves,
  },
  {
    title: "Calculateurs intégrés",
    description:
      "Volume d'organe, washout surrénalien, MDRD, PSA Density, RECIST, Cheson : les calculs sont faits dans le compte rendu.",
    icon: Calculator,
  },
  {
    title: "Dictez. Relisez. Validez.",
    description:
      "Le compte rendu est toujours relu et validé par le radiologue avant signature et diffusion.",
    icon: BadgeCheck,
  },
];

export const reportTemplates = [
  {
    modality: "Scanner",
    examples: ["Thorax", "Abdomino-pelvien", "Crâne", "Angioscanner"],
  },
  { modality: "IRM", examples: ["Lombaire", "Genou", "Cérébrale", "Hépatique"] },
  { modality: "Échographie", examples: ["Abdominale", "Thyroïde", "Sein", "Pelvienne"] },
  { modality: "Radiographie", examples: ["Thorax", "Rachis", "Membres", "Bassin"] },
] as const;

export const calculators = [
  { name: "Volume d'organe", description: "Volumétrie à partir des trois diamètres." },
  {
    name: "Washout surrénalien",
    description: "Washout absolu et relatif sur scanner injecté.",
  },
  { name: "MDRD", description: "Estimation du débit de filtration glomérulaire." },
  { name: "PSA Density", description: "Rapport PSA / volume prostatique." },
  { name: "RECIST", description: "Somme des cibles et réponse tumorale." },
  { name: "Cheson", description: "Évaluation de la réponse en hématologie." },
] as const;

export const echoQuickForms = [
  { name: "Sein", standard: "BI-RADS" },
  { name: "Thyroïde", standard: "TI-RADS" },
  { name: "IRM lombaire", standard: "Formulaire rapide" },
] as const;

/* ---------------------------------------------------------------- */
/* Nexrad RIS                                                         */
/* ---------------------------------------------------------------- */

export const risModules: Feature[] = [
  {
    title: "Accueil patient",
    description: "Identité, admission, pièces et consentements.",
    icon: UserPlus,
  },
  {
    title: "Rendez-vous",
    description: "Prise de rendez-vous et convocations.",
    icon: CalendarClock,
  },
  {
    title: "Planning",
    description: "Salles, modalités et créneaux en un coup d'œil.",
    icon: LayoutDashboard,
  },
  {
    title: "Dossier patient",
    description: "Historique des examens et comptes rendus.",
    icon: FileText,
  },
  {
    title: "Examens",
    description: "Protocoles, statuts et suivi en temps réel.",
    icon: ListChecks,
  },
  {
    title: "Facturation et caisse",
    description: "Devis, encaissements, tiers payant.",
    icon: Receipt,
  },
  {
    title: "Stock",
    description: "Consommables, produits de contraste, alertes.",
    icon: Package,
  },
  {
    title: "Statistiques",
    description: "Activité par modalité, praticien et période.",
    icon: PieChart,
  },
  {
    title: "Dictée intégrée",
    description: "Nexrad AI directement dans la fiche examen.",
    icon: Mic,
  },
];

export const worklistFlow: WorkflowStep[] = [
  { label: "RIS", description: "Examen planifié", icon: LayoutDashboard },
  { label: "DICOM MWL", description: "Worklist publiée", icon: ClipboardList },
  {
    label: "Modalité",
    description: "Scanner, IRM, RX, autres modalités compatibles",
    icon: Radio,
  },
];

export const pacsFeatures: Feature[] = [
  {
    title: "Stockage",
    description: "Archivage sécurisé des examens DICOM.",
    icon: HardDrive,
  },
  {
    title: "Examens",
    description: "Recherche par patient, date, modalité.",
    icon: FileSearch,
  },
  {
    title: "Worklist",
    description: "Alimentée par le RIS, consommée par les modalités.",
    icon: ClipboardList,
  },
  {
    title: "Intégration",
    description: "Viewer, RIS et dictée dans un même workflow.",
    icon: ArrowRightLeft,
  },
];

export const viewerFeatures: Feature[] = [
  {
    title: "Consultation DICOM",
    description: "Ouverture des examens depuis le RIS.",
    icon: MonitorPlay,
  },
  {
    title: "Navigateur",
    description: "Aucune installation : tout se passe dans le navigateur.",
    icon: MousePointerClick,
  },
  {
    title: "Images et séries",
    description: "Navigation entre séries, comparaison, outils de mesure.",
    icon: Layers,
  },
  {
    title: "Workflow",
    description: "Lecture, dictée et validation sans changer d'écran.",
    icon: Zap,
  },
];

export const hl7Messages = [
  {
    code: "ADT",
    label: "Admission, Discharge, Transfer",
    description: "Identité et mouvements du patient.",
  },
  { code: "ORM", label: "Order Message", description: "Demandes d'examens." },
  {
    code: "ORU",
    label: "Observation Result",
    description: "Comptes rendus et résultats.",
  },
] as const;

/* ---------------------------------------------------------------- */
/* Nexrad Bridge                                                      */
/* ---------------------------------------------------------------- */

export const bridgeFeatures: Feature[] = [
  {
    title: "Application légère",
    description: "Installée en quelques minutes sur le poste de lecture.",
    icon: Zap,
  },
  {
    title: "Always-on-top",
    description: "Une fenêtre discrète qui reste au-dessus de votre PACS.",
    icon: LayoutDashboard,
  },
  {
    title: "Raccourcis globaux",
    description: "Déclenchez la dictée sans quitter votre viewer.",
    icon: Keyboard,
  },
  {
    title: "Capture",
    description: "Récupérez le contexte de l'examen affiché.",
    icon: ScanSearch,
  },
  {
    title: "Dictée",
    description: "Les quatre modes Nexrad AI, au clavier ou à la voix.",
    icon: Mic,
  },
  {
    title: "Génération",
    description: "Compte rendu structuré généré dans le cloud NEXRAD.",
    icon: Sparkles,
  },
  {
    title: "Injection automatique",
    description: "Le texte est inséré dans le champ actif du logiciel cible.",
    icon: Send,
  },
  {
    title: "Intégrations",
    description: "PACS, RIS tiers, Microsoft Word et logiciels métier compatibles.",
    icon: ArrowRightLeft,
  },
];

export const bridgeSteps: WorkflowStep[] = [
  {
    label: "Ouvrez l'examen",
    description: "Dans votre PACS ou viewer habituel.",
    icon: MonitorPlay,
  },
  {
    label: "Raccourci global",
    description: "Bridge s'affiche au-dessus de l'écran.",
    icon: Keyboard,
  },
  {
    label: "Dictez",
    description: "Mode Brut, Grand titre, Secrétaire ou Mixte.",
    icon: Mic,
  },
  {
    label: "Relisez et validez",
    description: "Le compte rendu est injecté dans le logiciel cible.",
    icon: ClipboardCheck,
  },
];

export const bridgeTargets = [
  { name: "PACS", note: "Injection dans le module de compte rendu." },
  { name: "RIS tiers", note: "Lorsque le logiciel est compatible." },
  { name: "Microsoft Word", note: "Lorsque le poste est compatible." },
  { name: "Logiciel métier", note: "Tout champ texte actif." },
] as const;

/* Shared radiology facts (all sourced from the product brief). */
export const radiologyFacts = [
  { value: "4", label: "modes de dictée", icon: Mic },
  { value: "4", label: "modalités couvertes par les modèles", icon: Library },
  { value: "3", label: "types de messages HL7", icon: Network },
  { value: "6", label: "calculateurs intégrés", icon: Calculator },
] as const;

export const radiologyIcons = { Activity, Gauge, Stethoscope, Wallet };
