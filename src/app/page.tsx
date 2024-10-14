import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="container mx-auto px-4 py-10 flex justify-center">
      {t("text")}
    </div>
  );
}
