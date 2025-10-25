import React, { useRef, type JSX } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const items = [
  {
    id: "guards",
    title: "Agents de sécurité",
    desc: "Agents formés pour les patrouilles, les événements et les postes fixes",
    media: "/media/guards.jpg",
  },
  {
    id: "cctv",
    title: "Systèmes de vidéosurveillance",
    desc: "Installation et surveillance",
    media: "/media/cctv.jpg",
  },
  {
    id: "access",
    title: "Contrôle d’accès",
    desc: "Systèmes biométriques et par carte",
    media: "/media/access.jpg",
  },
  {
    id: "checks",
    title: "Contrôles d’entrée",
    desc: "Services de filtrage et de vérification des sacs",
    media: "/media/checks.jpg",
  },
  {
    id: "response",
    title: "Intervention sur alarme",
    desc: "Unités d’intervention rapide",
    media: "/media/response.jpg",
  },
  {
    id: "consult",
    title: "Conseil",
    desc: "Évaluation des risques et inspections de sites",
    media: "/media/consult.jpg",
  },
];

export default function BentoBox(): JSX.Element {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold mb-10 text-center">
        Ce que nous faisons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <TiltCard key={it.id} item={it} index={i} />
        ))}
      </div>

      <div className="mt-12 bg-[#0b1428] rounded-2xl p-6 flex flex-wrap gap-6 justify-around items-center text-center shadow-lg">
        <Stat label="Surveillance & Intervention" value="24/7" />
        <Stat label="Agents Déployés" value="150+" />
        <Stat label="Clients Satisfaits" value="500+" />
      </div>
    </section>
  );
}

function TiltCard({
  item,
  index,
}: {
  item: { id: string; title: string; desc: string; media: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-75, 75], [8, -8]);
  const rotateY = useTransform(x, [-75, 75], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#0e1a33] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48">
        {item.media.endsWith(".mp4") ? (
          <video
            src={item.media}
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70"
          />
        ) : (
          <img
            src={item.media}
            alt={item.title}
            className="w-full h-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-gray-300 my-3">{item.desc}</p>
        <button
          onClick={() => (window.location.href = `/services#${item.id}`)}
          className="cursor-pointer px-4 py-2 bg-primary text-black rounded-md text-sm font-semibold transition-all duration-300 hover:bg-primary/80 hover:scale-105 hover:text-white"
        >
          En savoir plus
        </button>
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
