import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "pt"
        ? // When using Turbopack, this will enable HMR for `en`
          import("@/data/messages/pt.json")
        : import(`@/data/messages/${locale}.json`))
    ).default,
  };
});
