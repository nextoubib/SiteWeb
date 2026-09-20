"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FieldError,
  FieldHint,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/field";
import {
  demoCountries,
  demoProducts,
  demoProfessions,
  type DemoProductValue,
} from "@/data/demo";
import { submitDemoRequest } from "./demo-actions";
import {
  demoRequestSchema,
  type DemoActionState,
  type DemoRequestInput,
} from "./demo-schema";

const initialState: DemoActionState = { status: "idle" };

type DemoFormProps = {
  /** Pre-selected product (from ?produit=…). */
  defaultProduct?: DemoProductValue;
};

export function DemoForm({ defaultProduct }: DemoFormProps) {
  const [state, formAction, pending] = useActionState(submitDemoRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<DemoRequestInput>({
    resolver: zodResolver(demoRequestSchema),
    mode: "onBlur",
    defaultValues: {
      product: defaultProduct ?? "nexrad-ai",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-nextoubib/30 bg-nextoubib-soft p-8 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="mx-auto size-10 text-nextoubib" />
        <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground">
          Demande envoyée
        </h2>
        <p className="mt-2 text-sm text-muted-strong">
          Merci. L&apos;équipe NEXRAD vous recontacte pour organiser une démonstration
          adaptée à votre pratique.
        </p>
      </div>
    );
  }

  const errorFor = (name: keyof DemoRequestInput) =>
    errors[name]?.message?.toString() ??
    (submittedOnce ? state.fieldErrors?.[name] : undefined);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      onSubmit={async (event) => {
        setSubmittedOnce(true);
        const valid = await trigger();
        if (!valid) event.preventDefault();
      }}
      className="space-y-5"
      aria-describedby={state.status === "error" ? "demo-form-status" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">Prénom</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errorFor("firstName")}
            aria-describedby={errorFor("firstName") ? "firstName-error" : undefined}
            {...register("firstName")}
          />
          <FieldError id="firstName-error">{errorFor("firstName")}</FieldError>
        </div>
        <div>
          <Label htmlFor="lastName">Nom</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={!!errorFor("lastName")}
            aria-describedby={errorFor("lastName") ? "lastName-error" : undefined}
            {...register("lastName")}
          />
          <FieldError id="lastName-error">{errorFor("lastName")}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="profession">Profession</Label>
          <Select
            id="profession"
            defaultValue=""
            aria-invalid={!!errorFor("profession")}
            aria-describedby={errorFor("profession") ? "profession-error" : undefined}
            {...register("profession")}
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            {demoProfessions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
          <FieldError id="profession-error">{errorFor("profession")}</FieldError>
        </div>
        <div>
          <Label htmlFor="organization">Établissement / cabinet</Label>
          <Input
            id="organization"
            autoComplete="organization"
            aria-invalid={!!errorFor("organization")}
            aria-describedby={errorFor("organization") ? "organization-error" : undefined}
            {...register("organization")}
          />
          <FieldError id="organization-error">{errorFor("organization")}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="country">Pays</Label>
          <Select
            id="country"
            defaultValue=""
            aria-invalid={!!errorFor("country")}
            aria-describedby={errorFor("country") ? "country-error" : undefined}
            {...register("country")}
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            {demoCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <FieldError id="country-error">{errorFor("country")}</FieldError>
        </div>
        <div>
          <Label htmlFor="product">Produit</Label>
          <Select
            id="product"
            aria-invalid={!!errorFor("product")}
            aria-describedby={errorFor("product") ? "product-error" : undefined}
            {...register("product")}
          >
            {demoProducts.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </Select>
          <FieldError id="product-error">{errorFor("product")}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">E-mail professionnel</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errorFor("email")}
            aria-describedby={errorFor("email") ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error">{errorFor("email")}</FieldError>
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errorFor("phone")}
            aria-describedby={errorFor("phone") ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error">{errorFor("phone")}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          placeholder="Votre organisation, vos logiciels actuels (PACS, RIS, HIS), vos attentes…"
          aria-invalid={!!errorFor("message")}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-error">{errorFor("message")}</FieldError>
      </div>

      {/* Honeypot: hidden from humans, filled by naive bots. */}
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Site web</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted-strong">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-border-strong accent-primary"
            aria-invalid={!!errorFor("consent")}
            aria-describedby={errorFor("consent") ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            J&apos;accepte d&apos;être recontacté(e) par NEXRAD au sujet de cette demande
            de démonstration.
          </span>
        </label>
        <FieldError id="consent-error">{errorFor("consent")}</FieldError>
      </div>

      {state.status === "error" && !state.fieldErrors ? (
        <p
          id="demo-form-status"
          role="alert"
          className="rounded-md border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <FieldHint>Vos données servent uniquement à traiter votre demande.</FieldHint>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? <LoaderCircle className="animate-spin" /> : <Send />}
          Demander une démonstration
        </Button>
      </div>
    </form>
  );
}
