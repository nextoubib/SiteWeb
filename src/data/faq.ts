import type { FaqItem } from "@/types";

export const homeFaq: FaqItem[] = [
  {
    question: "NEXRAD est-il un simple logiciel de dictée ?",
    answer:
      "Non. NEXRAD est un écosystème : Nexrad AI pour la dictée et les comptes rendus, Nexrad RIS pour la gestion du centre d'imagerie, Nexrad Bridge pour l'intégration dans vos logiciels existants, et Nextoubib pour le dossier médical des cliniciens.",
  },
  {
    question: "L'IA remplace-t-elle le radiologue ou le médecin ?",
    answer:
      "Jamais. Les suggestions générées constituent une assistance à la décision et doivent être validées par le professionnel de santé. Le praticien conserve la validation, la responsabilité et la décision finale.",
  },
  {
    question: "Dois-je changer de PACS pour utiliser Nexrad AI ?",
    answer:
      "Non. Nexrad Bridge injecte le compte rendu généré directement dans votre PACS, votre RIS tiers ou Microsoft Word lorsqu'ils sont compatibles.",
  },
  {
    question: "Comment obtenir une démonstration ?",
    answer:
      "Remplissez le formulaire de démonstration en précisant votre profession, votre établissement et le produit qui vous intéresse. L'équipe NEXRAD vous recontacte pour organiser une présentation adaptée à votre pratique.",
  },
];

export const aiFaq: FaqItem[] = [
  {
    question: "Quelle est la différence entre le mode Secrétaire et le mode Mixte ?",
    answer:
      "Le mode Secrétaire corrige l'orthographe, la syntaxe, la ponctuation et la mise en forme sans aucune extrapolation clinique : le contenu reste 100 % fidèle à la dictée. Le mode Mixte conserve le texte dicté mais l'enrichit, le structure et le synthétise.",
  },
  {
    question: "Le mode Grand titre invente-t-il des résultats ?",
    answer:
      "Il construit un compte rendu structuré à partir des observations que vous fournissez, en s'appuyant sur la sémiologie attendue. Le compte rendu est toujours relu et validé par le radiologue avant signature.",
  },
  {
    question: "L'assistance au diagnostic différentiel est-elle un diagnostic ?",
    answer:
      "Non. À partir d'une description sémiologique, Nexrad AI propose des hypothèses à considérer. Il s'agit d'une assistance à la décision médicale, jamais d'un diagnostic autonome.",
  },
  {
    question: "Puis-je utiliser mes propres modèles de comptes rendus ?",
    answer:
      "La bibliothèque comprend des modèles normaux et pathologiques pour le scanner, l'IRM, l'échographie et la radiographie, que vous pouvez adapter à votre style.",
  },
];

export const nextoubibFaq: FaqItem[] = [
  {
    question: "Nextoubib prescrit-il à la place du médecin ?",
    answer:
      "Non. L'assistance à la génération des ordonnances tient compte du contexte patient et des référentiels disponibles, mais le médecin reste décisionnaire et valide chaque prescription.",
  },
  {
    question: "Comment fonctionne le QR Scan ?",
    answer:
      "Le médecin ouvre le patient, Nextoubib génère un QR Code, le médecin le scanne avec son téléphone, photographie le document, et le fichier est envoyé dans le dossier patient. Nextoubib peut ensuite le traiter (OCR, extraction).",
  },
  {
    question: "L'OCR interprète-t-il les bilans ?",
    answer:
      "L'OCR extrait les valeurs des résultats biologiques, tableaux et documents. Il s'agit d'une assistance à l'interprétation, jamais d'un diagnostic automatique.",
  },
  {
    question: "Dans quels pays les ordonnances sont-elles prises en charge ?",
    answer:
      "Selon la version du produit : Tunisie, Algérie, France, Maroc, Libye et États-Unis sont envisagés ou pris en charge.",
  },
];

export const pricingFaq: FaqItem[] = [
  {
    question: "Pourquoi les tarifs sont-ils sur devis ?",
    answer:
      "Le périmètre varie fortement d'un radiologue indépendant à un établissement multi-sites : nombre de praticiens, de salles, de modalités, intégrations HL7, formation. Un devis reflète votre configuration réelle.",
  },
  {
    question: "Peut-on commencer par un seul produit ?",
    answer:
      "Oui. Nexrad AI avec Bridge, Nexrad RIS ou Nextoubib peuvent être déployés séparément, puis étendus à l'écosystème complet.",
  },
  {
    question: "Une démonstration est-elle obligatoire avant devis ?",
    answer:
      "Elle est recommandée : elle permet de qualifier votre workflow et vos intégrations pour établir une proposition précise.",
  },
];
