import React, { type JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black/40 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-400 flex justify-between">
        <div>© {new Date().getFullYear()} SecureTech</div>
        <div>
          Contact:{" "}
          <a href="mailto:hello@securetech.example" className="text-primary">
            hello@securetech.example
          </a>
        </div>
      </div>
    </footer>
  );
}
