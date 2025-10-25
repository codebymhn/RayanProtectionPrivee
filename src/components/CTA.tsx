import React, { type JSX } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA(): JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-16"
    >
      <div className="relative overflow-hidden rounded-3xl p-10 bg-linear-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Sécurisez votre site dès aujourd’hui
            </h3>
            <p className="text-gray-300 text-lg">
              Obtenez une évaluation des risques gratuite et un devis auprès de
              notre équipe certifiée.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="/contact"
              className="cursor-pointer px-6 py-3 rounded-md bg-primary text-black font-semibold shadow-md transition-all duration-300 hover:bg-primary/80 hover:scale-105 hover:shadow-lg"
            >
              Obtenez Un Devis
            </Link>

            <Link
              to="/services"
              className="cursor-pointer px-6 py-3 border border-gray-700 text-gray-200 rounded-md transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105"
            >
              Nos Services
            </Link>
          </div>
        </div>

        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-primary/30 to-transparent blur-3xl opacity-30"
        />
      </div>
    </motion.section>
  );
}
