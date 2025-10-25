import { Suspense, type JSX } from "react";
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
  return (
    <ActivationGate>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 px-4 md:px-8">
          <Suspense
            fallback={<div className="p-8 text-center">Loading...</div>}
          >
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
      </div>
    </ActivationGate>
  );
}
