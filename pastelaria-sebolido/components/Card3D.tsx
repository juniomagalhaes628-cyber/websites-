"use client";

import { motion } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Card3D({ children, className = "", strength = 6 }: Card3DProps) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(strength);

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
