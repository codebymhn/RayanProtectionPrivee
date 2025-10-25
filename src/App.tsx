import { Suspense, useState, type JSX } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import ActivationGate from "./components/ActivationGate";

export default function App(): JSX.Element {
  const [activated, setActivated] = useState(
    () => localStorage.getItem("rp_activated") === "1"
  );

  function handleActivated() {
    setActivated(true);
  }

  if (!activated) {
    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white text-center p-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Site non activé</h2>
            <p>
              Le site est masqué. Cliquez sur « Activation » pour entrer une
              clé.
            </p>
          </div>
        </div>
        <ActivationGate onActivated={handleActivated} activated={activated} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 px-4 md:px-8">
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {/* Activation button no longer appears when activated ✅ */}
      <ActivationGate onActivated={handleActivated} activated={activated} />
    </div>
  );
}
