import { getUserLocale } from "@/locale/locale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`@/data/messages/${locale}.json`)).default,
  };
});
