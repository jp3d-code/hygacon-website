"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import React from "react";
import { easeOutQuint } from "@/shared/animations/easings";
import { revealTransition, revealVariants } from "@/shared/animations/reveal";
import { cn } from "@/shared/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex w-full items-center justify-center px-4 pt-20 pb-24",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
  animation = true,
  ...props
}: HTMLMotionProps<"div"> & { animation?: boolean }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.26 });
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = animation && !shouldReduceMotion;
  const initialState = shouldAnimate ? "hidden" : { opacity: 1, y: 0 };
  const animateState = shouldAnimate && isInView ? "visible" : initialState;

  return (
    <motion.div
      ref={containerRef}
      variants={revealVariants}
      initial={initialState}
      animate={animateState}
      transition={shouldAnimate ? revealTransition : { duration: 0 }}
      className={cn(
        "flex w-full max-w-7xl flex-col items-center justify-center gap-20",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const childrenArray = React.Children.toArray(children);

  const separatorRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(separatorRef, {
    once: true,
    amount: 0.4,
  });
  const shouldReduceMotion = useReducedMotion();

  const separator = (
    <motion.div
      ref={separatorRef}
      className="h-0.75 w-16 origin-left rounded-full bg-primary"
      initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
      animate={{ scaleX: isInView || shouldReduceMotion ? 1 : 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              ease: easeOutQuint,
            }
      }
      key="separator"
    />
  );

  const content =
    childrenArray.length >= 3
      ? [...childrenArray.slice(0, 2), separator, ...childrenArray.slice(2)]
      : [...childrenArray, separator];

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}

export function SectionOverline({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-primary text-sm uppercase tracking-widest",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionTitle({
  first,
  second,
  className,
  ...props
}: React.ComponentProps<"h3"> & {
  first: string;
  second?: string;
}) {
  return (
    <h3
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-2 font-condensed font-extrabold text-4xl uppercase",
        className,
      )}
      {...props}
    >
      <span className={cn("text-secondary", className)}>{first}</span>{" "}
      {second && <span className="text-primary">{second}</span>}
    </h3>
  );
}

export function SectionDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "w-full max-w-xl text-center text-lg text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
