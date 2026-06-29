"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import type React from "react";

const SPRING = { stiffness: 220, damping: 22, mass: 0.5 };

export function use3DTilt(strength = 8) {
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  const rotateY = useTransform(x, [0, 1], [-strength, strength]);
  const rotateX = useTransform(y, [0, 1], [strength, -strength]);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    rawX.set(0.5);
    rawY.set(0.5);
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}
