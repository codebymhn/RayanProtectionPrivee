import React, { useRef, useState, type JSX } from "react";
import API from "../services/api";

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const [visible, setVisible] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd);

    // Reset visibility and show “Sending...”
    setVisible(true);
    setStatus("Envoie...");

    try {
      const res = await API.post("/contact", body);
      if (res.status === 200) {
        setStatus(
          "E-mail envoyé — Rayan Protection Privée vous répondra sous 24H ✅"
        );
        if (formRef.current) formRef.current.reset();

        // Fade out after a few seconds
        setTimeout(() => setVisible(false), 2500);
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus(
          "❌ Erreur d’envoi — Votre e-mail n’a pas été envoyé. Veuillez essayer de l’envoyer manuellement à : rayanprotectionprivee@gmail.com"
        );
        setTimeout(() => setVisible(false), 2500);
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Frontend send error:", error);
      setStatus("❌ Error sending");
      setTimeout(() => setVisible(false), 2500);
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="space-y-4 bg-[#071026] p-6 rounded-lg"
      >
        <input
          name="name"
          required
          className="w-full p-3 rounded bg-black/30"
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          required
          className="w-full p-3 rounded bg-black/30"
          placeholder="Email"
        />
        <input
          name="company"
          className="w-full p-3 rounded bg-black/30"
          placeholder="Company (optional)"
        />
        <textarea
          name="message"
          rows={5}
          required
          className="w-full p-3 rounded bg-black/30"
          placeholder="Message"
        />
        <div className="flex gap-4 items-center">
          <button
            type="submit"
            className="bg-primary px-4 py-2 rounded text-black font-semibold cursor-pointer transition-all duration-300 hover:bg-primary/80 hover:scale-105 hover:text-(--secondary)"
          >
            Envoyer
          </button>
          {status && (
            <p
              className={`transition-opacity duration-700 ${
                visible ? "opacity-100" : "opacity-0"
              } ${
                status.includes("✅")
                  ? "text-green-500"
                  : status.includes("Envoie")
                  ? "text-gray-400"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
