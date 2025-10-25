import React from "react";
import { motion } from "framer-motion";

export default function LogoAnimation() {
  return (
    <motion.div
      className="relative w-70 h-70 mx-auto"
      initial={{ x: 500, y: 0, rotateY: 0, scale: 1 }}
      animate={{
        x: 0,
        transition: {
          type: "spring",
          stiffness: 120, // fast start
          damping: 20, // slows naturally
        },
      }}
    >
      <motion.img
        src="/public/media/logo-full.png"
        alt="Company Logo"
        className="w-full h-full object-contain select-none"
        draggable="false"
        style={{
          filter: "drop-shadow(0 0 16px rgba(6, 182, 212, 0.8))", // glowing shadow
        }}
        initial={{ rotateY: 0, y: 0 }}
        animate={{
          y: [0, -40, 0], // bounce effect
          rotateY: [0, 360], // full rotation on Y-axis
        }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease: [0.42, 0, 0.58, 1], // fast start, slow end
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      />
    </motion.div>
  );
}
