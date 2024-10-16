import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt", "jp"],
  defaultLocale: "pt",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      pt: "/sobre",
      jp: "/私たちについて",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
