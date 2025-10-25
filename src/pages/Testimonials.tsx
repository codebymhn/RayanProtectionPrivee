import React, { type JSX } from "react";
import { Quote } from "lucide-react";

export default function Testimonials(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10 bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Témoignages & Partenaires
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <Quote className="w-8 h-8 text-blue-500 mb-4" />
          <p className="text-gray-300 italic mb-3">
            « Fiables, professionnels et toujours réactifs. Une équipe sur
            laquelle nous pouvons compter. »
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            — Société Financière
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <Quote className="w-8 h-8 text-blue-500 mb-4" />
          <p className="text-gray-300 italic mb-3">
            « Excellente surveillance et intervention rapide. Leur
            professionnalisme fait toute la différence. »
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            — Chaîne de Magasins
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <Quote className="w-8 h-8 text-blue-500 mb-4" />
          <p className="text-gray-300 italic mb-3">
            « Une collaboration efficace et une équipe toujours disponible.
            RayanProtectionPrivée a su répondre à toutes nos attentes. »
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            — Entreprise Logistique
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-md p-6 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <Quote className="w-8 h-8 text-blue-500 mb-4" />
          <p className="text-gray-300 italic mb-3">
            « Des solutions modernes et une présence rassurante. Leur service de
            vidéosurveillance est impeccable. »
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            — Gestion Immobilière
          </p>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-12">
        <strong>RayanProtectionPrivée</strong> collabore avec des entreprises,
        institutions et particuliers à travers toute la région, garantissant
        sécurité, réactivité et confiance.
      </p>
    </section>
  );
}
