import type { Variants } from "framer-motion";

// Spring config — like dough rising and settling
export const SPRING_SEBOLIDO = { type: "spring", stiffness: 180, damping: 18 } as const;
export const SPRING_HERO = { type: "spring", stiffness: 200, damping: 20 } as const;

// Cards pop in like fresh bread — scale + slight tilt
export const springPop: Variants = {
  hidden: { opacity: 0, scale: 0.75, rotateZ: -2 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { ...SPRING_SEBOLIDO, delay: i * 0.07 },
  }),
};

// Section headers — bouncy pop
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...SPRING_HERO },
  },
};

// Underline decoration — bouncy grow
export const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...SPRING_SEBOLIDO, delay: 0.2 },
  },
};

// Hero elements spring in with stagger
export const heroSpring: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...SPRING_HERO, delay: i * 0.1 },
  }),
};

// About image — spring bounce from left
export const imageBounce: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: SPRING_SEBOLIDO,
  },
};

// Gallery pop-in from center
export const galleryPop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...SPRING_SEBOLIDO, delay: i * 0.06 },
  }),
};
