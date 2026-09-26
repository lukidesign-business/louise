"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUpNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[A-Za-z]+$/)?.[0] ?? "";
  const numericValue = Number(value.replace(/[^0-9.]/g, ""));
  const decimals = (value.split(".")[1] ?? "").replace(/[A-Za-z]+$/, "").length;
  const [displayValue, setDisplayValue] = useState(reducedMotion ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) return;

    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (numericValue * eased).toFixed(decimals);
      setDisplayValue(`${prefix}${Number(current).toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, isInView, numericValue, prefix, reducedMotion, suffix, value]);

  return <span ref={ref}>{displayValue}</span>;
}
