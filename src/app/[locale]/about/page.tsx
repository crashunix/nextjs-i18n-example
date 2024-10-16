import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-10">{t.rich("text")}</p>
    </div>
  );
};

export default About;
