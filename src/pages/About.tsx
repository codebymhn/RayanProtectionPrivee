import React, { type JSX } from "react";
import { ShieldCheck, Award, Cpu } from "lucide-react";

export default function About(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          À propos de RayanProtectionPrivée
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Expertise, fiabilité et innovation — notre équipe protège vos sites,
          vos biens et vos proches avec un engagement total envers la sécurité
          et l’excellence.
        </p>
      </div>

      {/* Description */}
      <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
        <p>
          Chez <strong>RayanProtectionPrivée</strong>, nous sommes une équipe de
          professionnels de la sécurité certifiés, forts de plus de 10 ans
          d’expérience dans la protection des personnes, des biens et des
          infrastructures. Notre mission : fournir des solutions de sécurité
          fiables, modernes et adaptées à chaque environnement.
        </p>
        <p>
          Nous combinons une expertise humaine rigoureuse à des technologies de
          pointe pour garantir un niveau de protection optimal. Nos agents sont
          sélectionnés avec soin, formés selon les standards les plus exigeants,
          et encadrés par une direction expérimentée. Chaque mission repose sur
          la discrétion, la réactivité et la conformité aux normes de sécurité
          internationales.
        </p>
      </div>

      {/* Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-7 h-7 text-blue-500" />
            <h3 className="font-semibold text-lg">Personnel Vérifié</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tous nos agents sont minutieusement contrôlés, qualifiés et
            régulièrement formés aux protocoles de sécurité les plus récents.
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-7 h-7 text-blue-500" />
            <h3 className="font-semibold text-lg">
              Procédures Alignées sur l’ISO
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nos processus respectent les normes ISO afin de garantir qualité,
            fiabilité et conformité à chaque étape de nos opérations.
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30 transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-7 h-7 text-blue-500" />
            <h3 className="font-semibold text-lg">Technologie de Pointe</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nous intégrons la vidéosurveillance intelligente, le contrôle
            d’accès biométrique et des systèmes d’alerte avancés pour une
            sécurité complète et proactive.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-300">
        <p className="max-w-2xl mx-auto">
          Que ce soit pour un site industriel, un événement, un bureau ou une
          résidence, <strong>RayanProtectionPrivée</strong> s’engage à offrir
          une protection sur mesure et une tranquillité d’esprit totale.
        </p>
      </div>
    </section>
  );
}
