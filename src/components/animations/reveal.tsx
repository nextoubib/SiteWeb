"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds. */
  delay?: number;
  /** Render as a different HTML element. */
  as?: "div" | "section" | "li" | "article";
  /** Distance travelled on reveal (px). */
  y?: number;
};

/**
 * Fade-and-rise reveal on scroll. Reduced-motion preferences are handled
 * globally by `MotionProvider` (transforms disabled, opacity kept), and a
 * `noscript` rule in the root layout keeps content visible without JS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 20,
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      data-reveal=""
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  /** Delay between children (seconds). */
  gap?: number;
};

/** Reveals children one after the other. Children must be `StaggerItem`s. */
export function Stagger({ children, className, as = "div", gap = 0.08 }: StaggerProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ visible: { transition: { staggerChildren: gap } }, hidden: {} }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Comp = motion[as];
  return (
    <Comp
      data-reveal=""
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </Comp>
  );
}
