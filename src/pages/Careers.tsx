import React, { type JSX } from "react";
import { Shield, Camera, Mail, Users } from "lucide-react";

export default function Careers(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Carrières chez RayanSecuritéPrivée
      </h1>
      <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
        Rejoignez une entreprise de sécurité innovante et reconnue. Nous
        recrutons des <strong>agents de sécurité</strong>, des{" "}
        <strong>superviseurs</strong>
        et des <strong>techniciens CCTV</strong> motivés pour renforcer notre
        équipe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold text-lg">Agent de sécurité</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Surveillez, protégez et assurez la sécurité des personnes et des
            biens sur différents sites (bureaux, événements, zones
            industrielles...).
          </p>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
            <Mail className="w-4 h-4" /> Postulez par e-mail :{" "}
            <a
              href="mailto:recrutement@securetech.fr"
              className="underline hover:text-blue-300"
            >
              recrutement@securetech.fr
            </a>
          </div>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold text-lg">Technicien CCTV</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Installez, configurez et maintenez nos systèmes de vidéosurveillance
            modernes chez nos clients. Une expérience en maintenance réseau est
            un plus.
          </p>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
            <Mail className="w-4 h-4" /> Postulez par e-mail :{" "}
            <a
              href="mailto:recrutement@securetech.fr"
              className="underline hover:text-blue-300"
            >
              recrutement@securetech.fr
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="flex justify-center mb-3">
          <Users className="w-8 h-8 text-blue-500" />
        </div>
        <p className="text-gray-300">
          Chez <strong>RayanSecuritéPrivée</strong>, nous croyons en la
          formation continue, la progression de carrière et un environnement de
          travail respectueux et valorisant.
        </p>
      </div>
    </div>
  );
}
