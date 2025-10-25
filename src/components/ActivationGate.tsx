// src/components/ActivationGate.tsx
import { useEffect, useState, type JSX } from "react";
import { verifyLicenseOnline } from "../utils/licenseCheck";

type ActivationGateProps = {
  onActivated: () => void;
  activated: boolean;
};

export default function ActivationGate({
  onActivated,
  activated,
}: ActivationGateProps): JSX.Element | null {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => setError(null), [input]);

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    setError(null);

    const valid = await verifyLicenseOnline(input.trim());
    setLoading(false);

    if (valid) {
      localStorage.setItem("rp_activated", "1");
      onActivated();
      setOpen(false);
    } else {
      setError("Clé invalide. Veuillez vérifier ou contacter le développeur.");
    }
  }

  if (activated) return null; // ✅ Don't render button or modal if already activated

  return (
    <>
      {/* Floating activation button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed z-[9999] right-4 bottom-4 bg-black/70 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-black/80"
      >
        Activation
      </button>

      {open && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <form
            onSubmit={handleSubmit}
            className="relative z-10 w-full max-w-md bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl"
          >
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Activation du site
            </h3>
            <p className="text-sm mb-4 text-slate-600 dark:text-slate-300">
              Entrez la clé d'activation fournie par le développeur pour
              déverrouiller le site.
            </p>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Entrez la clé ici"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring mt-1"
              autoFocus
            />

            {error && <div className="text-sm text-red-600 mt-2">{error}</div>}

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Vérification..." : "Activer"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
