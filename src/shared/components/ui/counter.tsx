"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({ finalNumber }: { finalNumber: number }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);

  const hasDecimals = !Number.isInteger(finalNumber);
  const step = hasDecimals ? 0.1 : 1;

  const display = useTransform(() => {
    const current = count.get();

    if (hasDecimals) {
      return (Math.round(current / step) * step).toFixed(1);
    }

    return Math.round(current).toString();
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run only once on mount
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, finalNumber, {
      duration: 5,
      onUpdate(latest) {
        if (hasDecimals) {
          count.set(Math.round(latest / step) * step);
        } else {
          count.set(Math.round(latest));
        }
      },
    });

    return () => controls.stop();
  }, [isInView, finalNumber]);

  return <motion.pre ref={ref}>{display}</motion.pre>;
}
