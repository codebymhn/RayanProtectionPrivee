// src/utils/licenseCheck.ts
export async function verifyLicenseOnline(key: string): Promise<boolean> {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/validate-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    if (!res.ok) return false;
    const data = await res.json();
    return data.valid === true;
  } catch {
    return false;
  }
}
export function verifyLicense(key: string): boolean {
  const validKey = import.meta.env.VITE_LICENSE_KEY;
  return key === validKey;
}