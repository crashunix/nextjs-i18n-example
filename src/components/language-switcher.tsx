"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/locale/locale";
import { startTransition } from "react";

const LanguageSwitcher = () => {
  function setLocale(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className="text-xs md:text-base bg-transparent border-none outline-none"
        onClick={() => setLocale("pt")}
      >
        PT
      </button>
      <span className="mb-2">|</span>
      <button
        className="text-xs md:text-base bg-transparent border-none outline-none"
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <span className="mb-2">|</span>
      <button
        className="text-xs md:text-base bg-transparent border-none outline-none"
        onClick={() => setLocale("jp")}
      >
        JP
      </button>
      <span className="mb-2">|</span>
      <button
        className="text-xs md:text-base bg-transparent border-none outline-none"
        onClick={() => setLocale("cn")}
      >
        CN
      </button>
      <span className="mb-2">|</span>
      <button
        className="text-xs md:text-base bg-transparent border-none outline-none"
        onClick={() => setLocale("tg")}
      >
        TG
      </button>
    </div>
  );
};

export default LanguageSwitcher;
