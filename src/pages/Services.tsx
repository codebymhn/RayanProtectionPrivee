import React, { type JSX } from "react";
import {
  ShieldCheck,
  Video,
  Key,
  Users,
  Bell,
  ClipboardCheck,
  GraduationCap,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Agents de sécurité (statiques et mobiles)",
    desc: "Présence sur site, patrouilles et surveillance continue assurées par du personnel qualifié.",
  },
  {
    icon: <Video className="w-6 h-6 text-blue-500" />,
    title: "Conception, installation et surveillance CCTV",
    desc: "Mise en place de systèmes de vidéosurveillance modernes pour une protection 24h/24.",
  },
  {
    icon: <Key className="w-6 h-6 text-blue-500" />,
    title: "Contrôle d’accès (carte, code, biométrie)",
    desc: "Gestion sécurisée des entrées avec solutions avancées et intégrées.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Contrôles d’entrée et sécurité événementielle",
    desc: "Filtrage, vérification des sacs et encadrement professionnel des événements.",
  },
  {
    icon: <Bell className="w-6 h-6 text-blue-500" />,
    title: "Réponse aux alarmes et gestion des incidents",
    desc: "Intervention rapide sur déclenchement d’alarme ou situation d’urgence.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
    title: "Évaluation des risques et conseil en sécurité",
    desc: "Audit complet pour identifier les vulnérabilités et proposer des solutions adaptées.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    title: "Formation en sécurité sur site",
    desc: "Sessions de formation personnalisées pour votre personnel et vos équipes internes.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    title: "Surveillance vidéo à distance (24h/24 - 7j/7)",
    desc: "Centre de contrôle actif en continu pour réagir instantanément aux alertes.",
  },
];

export default function Services(): JSX.Element {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Nos Services</h1>
      <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
        Des solutions de sécurité complètes et personnalisées pour protéger vos
        sites, vos équipes et vos biens.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <li
            key={index}
            className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-500 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {service.icon}
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
