import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "", // ✅ optional company field
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setFadeOut(false);
      const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
      const removeTimer = setTimeout(() => setStatus("idle"), 2500);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold mb-4 text-center text-primary">
        Contactez-nous
      </h2>
      <p className="text-center text-gray-200 mb-12 max-w-xl mx-auto">
        Vous avez une question ou souhaitez un devis ? Remplissez le formulaire
        ci-dessous et notre équipe vous contactera sous 24 heures.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/90 backdrop-blur-md shadow-xl p-10 rounded-2xl border border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Jean Dupont"
              required
              className="w-full border border-gray-300 text-gray-900 placeholder-gray-500
              focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg transition shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Adresse email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: jean.dupont@email.com"
              required
              className="w-full border border-gray-300 text-gray-900 placeholder-gray-500
              focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg transition shadow-sm bg-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-800 font-semibold mb-2">
              Entreprise (optionnel)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ex: Société ABC"
              className="w-full border border-gray-300 text-gray-900 placeholder-gray-500
              focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg transition shadow-sm bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre demande..."
            rows={5}
            required
            className="w-full border border-gray-300 text-gray-900 placeholder-gray-500
            focus:border-primary focus:ring-2 focus:ring-primary/30 p-3 rounded-lg transition shadow-sm bg-white resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-3.5 font-semibold text-white text-lg shadow-md rounded-lg transition ${
            status === "loading"
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark"
          }`}
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>

      {/* ✅ Feedback messages */}
      {status === "success" && (
        <div
          className={`mt-8 flex flex-col items-center text-green-600 ${
            fadeOut ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2 text-green-600 animate-scaleIn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-lg font-semibold">Message envoyé avec succès !</p>
          <span className="text-gray-700 mt-1">
            Nous vous répondrons sous 24 heures.
          </span>
        </div>
      )}

      {status === "error" && (
        <p
          className={`mt-8 text-center text-red-600 font-semibold ${
            fadeOut ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          ❌ Une erreur s’est produite. Veuillez réessayer plus tard.
        </p>
      )}
    </section>
  );
};

export default Contact;
