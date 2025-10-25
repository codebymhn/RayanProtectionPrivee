import { useState, useRef, useEffect, type JSX } from "react";
import LockSVG from "../components/LockSVG";
import BentoBox from "../components/BentoBox";
import CTA from "../components/CTA";

function ClientMediaSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h3 className="text-3xl font-extrabold mb-8 text-white tracking-tight">
        Media
      </h3>

      <div className="relative flex justify-center">
        <div className="relative w-full md:w-4/5 lg:w-3/4 aspect-video overflow-hidden rounded-2xl shadow-2xl border border-primary/30 bg-black">
          <video
            ref={videoRef}
            src="/media/overview.mp4"
            controls
            muted
            className="w-full h-full object-cover"
          />
          {/* Optional cinematic gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Un aperçu de la façon dont notre équipe protège les personnes et les
        biens grâce à une technologie avancée, une intervention rapide et une
        expertise éprouvée.
      </p>
    </section>
  );
}

export default function Home(): JSX.Element {
  const [open] = useState(false);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-20 flex gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Protéger les personnes et les biens grâce à une sécurité moderne.
          </h1>
          <p className="text-gray-300 max-w-xl mb-6">
            Nous combinons du personnel qualifié et des technologies modernes —
            vidéosurveillance, contrôle d’accès, intervention sur alarme et bien
            plus encore.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-primary px-6 py-3 rounded-md text-black font-semibold transition-all duration-300 hover:bg-primary/80 hover:scale-105"
            >
              Obtenez un devis
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-gray-700 rounded-md transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105"
            >
              Nos Services
            </a>
          </div>
        </div>

        <div className="w-1/3 hidden lg:block">
          <div className="card p-6 flex flex-col items-center">
            <LockSVG key={open ? "open" : "closed"} />
          </div>
        </div>
      </section>

      <BentoBox />
      <CTA />
      <ClientMediaSection />
    </div>
  );
}
