import React, { type JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black/40 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-400 flex justify-between">
        <div>© {new Date().getFullYear()} RayaneProtectionPrivée</div>
        <div>© {new Date().getFullYear()} Website made by codeByMhn</div>
        <div>
          Contact:{" "}
          <a href="mailto:hello@securetech.example" className="text-primary">
            rayanprotectionprivee.rpp@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
