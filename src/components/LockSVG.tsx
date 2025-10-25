import React from "react";
import { motion } from "framer-motion";

export default function LockSVG() {
  return (
    <motion.div
      className="relative w-40 h-40 mx-auto "
      initial={{ y: 0, scale: 1, filter: "drop-shadow(0 0 0px transparent)" }}
      whileHover={{
        y: -12,
        scale: 1.05,
        filter: "drop-shadow(0 0 20px #06b6d4)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.3,
      }}
    >
      <motion.img
        src="/media/lock-svgrepo-com.svg"
        alt="Lock Icon"
        className="w-full h-full object-contain select-none"
        draggable="false"
      />
    </motion.div>
  );
}
