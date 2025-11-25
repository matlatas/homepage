import React from "react";

const MATPRIS_LOGO_URL = "https://matpris.ai/favicon.svg";

export const WidgetFooter = () => {
  return (
    <div className="mt-8 w-full">
      {/* Footer container */}
      <div className="mx-auto max-w-2xl px-6 py-0 sm:px-8">
        <div className="flex items-start gap-3">
          {/* Logo */}
          <img
            src={MATPRIS_LOGO_URL}
            alt="Matpris"
            className="mt-0.5 h-6 flex-shrink-0"
          />

          {/* Text with embedded link */}
          <p className="text-xs leading-snug text-slate-600">
            Data er hentet fra matpris.ai og bearbeidet og kvalitetsjekket av
            Nettavisens journalister.{" "}
            <a
              href="https://matpris.ai/last-ned"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 underline transition-colors hover:text-emerald-700"
            >
              Last ned matpris-appen
            </a>{" "}
            for en smarte dagligvarehandel og de beste tilbudene.
          </p>
        </div>
      </div>
    </div>
  );
};
