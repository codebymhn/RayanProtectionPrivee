import React, { useState, useEffect, useCallback } from "react";

interface Props {
  children: React.ReactNode;
}

const ActivationGate: React.FC<Props> = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [key, setKey] = useState("");
  const [activated, setActivated] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Verify key manually (client activation)
  const verifyKey = useCallback(
    async (providedKey: string) => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/validate-key`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: providedKey }),
        });

        const data = await res.json();

        if (res.ok && data.valid) {
          localStorage.setItem("licenseKey", providedKey);
          setActivated(true);
          setError(null);
        } else {
          setActivated(false);
          setError(data.message || "Clé invalide. Veuillez réessayer.");
        }
      } catch (err) {
        console.error("Erreur de validation de la clé:", err);
        setActivated(false);
        setError("Impossible de contacter le serveur d’activation.");
      } finally {
        setLoading(false);
      }
    },
    [API_URL]
  );

  // ✅ On load, check if globally activated
  useEffect(() => {
    const checkGlobalActivation = async () => {
      try {
        const res = await fetch(`${API_URL}/api/check-activation`);
        const data = await res.json();
        if (data.activated) {
          setActivated(true);
        } else {
          const savedKey = localStorage.getItem("licenseKey");
          if (savedKey) await verifyKey(savedKey);
          else setActivated(false);
        }
      } catch (err) {
        console.error("Erreur lors de la vérification:", err);
        setActivated(false);
      }
    };
    checkGlobalActivation();
  }, [API_URL, verifyKey]);

  // ✅ UI
  if (activated === null || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-700 text-lg">
        <div className="animate-pulse">Vérification de l’activation...</div>
      </div>
    );
  }

  if (!activated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-tr from-gray-50 via-gray-100 to-gray-200 px-4">
        <div className="bg-white border border-gray-300 shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-lg p-10 max-w-md w-full text-center transition-all">
          <div className="mb-6">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 11v10m6-10a6 6 0 10-12 0 6 6 0 0012 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Activation requise
            </h1>
            <p className="text-gray-600 mt-2 text-sm">
              Veuillez entrer votre clé de licence pour accéder au site.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyKey(key);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Entrez votre clé de licence"
              className="w-full border border-gray-300 p-3 rounded-md text-center text-gray-900 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-200 placeholder-gray-400"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold tracking-wide rounded-md text-white 
                transition-all duration-300 shadow-md ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
                }`}
            >
              {loading ? "Activation..." : "Activer le site"}
            </button>
          </form>

          {error && (
            <p className="text-red-600 mt-4 font-medium text-sm animate-fadeIn">
              {error}
            </p>
          )}

          <p className="text-gray-400 text-xs mt-8">
            © {new Date().getFullYear()} CodeByMhn e-mail:codebymhn@gmail.com
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ActivationGate;
