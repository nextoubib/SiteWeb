"use client";

import { MotionConfig } from "motion/react";

/**
 * Global Motion configuration: honours the visitor's "prefers-reduced-motion"
 * setting (transform/layout animations are disabled, opacity fades are kept).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
