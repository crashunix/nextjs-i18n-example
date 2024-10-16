import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Cloud, Database, Lock, Smartphone, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SoftwareServices() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      title: t("customSoftwareDevelopment.title"),
      description: t("customSoftwareDevelopment.description"),
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: t("cloudSolutions.title"),
      description: t("cloudSolutions.description"),
      icon: <Cloud className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: t("databaseManagement.title"),
      description: t("databaseManagement.description"),
      icon: <Database className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: t("cybersecurity.title"),
      description: t("cybersecurity.description"),
      icon: <Lock className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: t("mobileAppDevelopment.title"),
      description: t("mobileAppDevelopment.description"),
      icon: <Smartphone className="h-8 w-8 mb-2 text-primary" />,
    },
    {
      title: t("aiAndMachineLearning.title"),
      description: t("aiAndMachineLearning.description"),
      icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-center">{service.icon}</div>
              <CardTitle className="text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">{t("learnMore")}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-xl text-muted-foreground mb-6">
          {t("ctaDescription")}
        </p>
        <Button size="lg">{t("contactUs")}</Button>
      </div>
    </div>
  );
}
