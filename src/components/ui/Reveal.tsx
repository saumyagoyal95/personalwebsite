"use client";

import { motion } from "motion/react";
import { riseIn, stagger, inViewProps } from "@/lib/motion";

/** Wrap a block to reveal it on scroll. Children can be <RevealItem/> to stagger. */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={stagger} {...inViewProps}>
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "ul" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={riseIn}>
      {children}
    </MotionTag>
  );
}
