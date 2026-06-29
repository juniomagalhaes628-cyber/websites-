import type { Variants } from "framer-motion";

export const EASE_JOCATI = [0.22, 1, 0.36, 1] as const;

// Cards fold up from below — like opening a physical menu
export const fadeUp3D: Variants = {
  hidden: { opacity: 0, rotateX: 20, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_JOCATI },
  }),
};

// Section headings — simple but with the Jocati ease curve
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_JOCATI },
  },
};

// Underline decoration that grows from left
export const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3, ease: EASE_JOCATI },
  },
};

// Hero words stagger
export const heroWord: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 15 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: EASE_JOCATI },
  }),
};

// Image slide in with slight 3D tilt
export const imageReveal3D: Variants = {
  hidden: { opacity: 0, x: -32, rotateY: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.7, ease: EASE_JOCATI },
  },
};
