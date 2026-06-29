import type { Variants } from "framer-motion";

export const EASE_MARCIA = [0.25, 0.46, 0.45, 0.94] as const;

// Cards turn like magazine pages from the left
export const pageTurn: Variants = {
  hidden: { opacity: 0, rotateY: -15, x: -30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_MARCIA },
  }),
};

// Section headings — elegant slide
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_MARCIA },
  },
};

// Underline decoration
export const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.65, delay: 0.3, ease: EASE_MARCIA },
  },
};

// Blur reveal for hero title words
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: EASE_MARCIA },
  }),
};

// Image slide from right with slight 3D
export const imageRevealRight: Variants = {
  hidden: { opacity: 0, x: 40, rotateY: 5 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: EASE_MARCIA },
  },
};

// Gallery curtain — scales from top
export const curtainReveal: Variants = {
  hidden: { opacity: 0, scaleY: 0, originY: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: EASE_MARCIA },
  }),
};
