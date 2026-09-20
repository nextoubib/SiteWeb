import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section containerSize="narrow" className="text-center">
      <p className="eyebrow text-primary">Erreur 404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Page introuvable</h1>
      <p className="mt-4 text-muted">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link href="/">
            <ArrowLeft />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
    </Section>
  );
}
