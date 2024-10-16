"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ContrastSwitcher = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const t = useTranslations("AcessibilityToolbar");

  const checkSystemContrastPreference = () => {
    const contrastQuery = window.matchMedia("(prefers-contrast: more)");
    return contrastQuery.matches;
  };

  useEffect(() => {
    const savedContrast = localStorage.getItem("contrast");
    const systemPrefersHighContrast = checkSystemContrastPreference();

    if (savedContrast === "more") {
      document.documentElement.classList.add("high-contrast");
      setIsHighContrast(true);
    } else if (savedContrast === "less") {
      document.documentElement.classList.remove("high-contrast");
      setIsHighContrast(false);
    } else if (systemPrefersHighContrast) {
      document.documentElement.classList.add("high-contrast");
      setIsHighContrast(true);
    }
  }, []);

  const toggleContrast = () => {
    if (isHighContrast) {
      document.documentElement.classList.remove("high-contrast");
      localStorage.setItem("contrast", "normal");
      setIsHighContrast(false);
    } else {
      document.documentElement.classList.add("high-contrast");
      localStorage.setItem("contrast", "more");
      setIsHighContrast(true);
    }
  };

  return (
    <button onClick={toggleContrast}>
      {isHighContrast ? t("deactivateContrast") : t("activateContrast")}
    </button>
  );
};

export default ContrastSwitcher;
