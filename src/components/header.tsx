import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";

const Header = () => {
  const t = useTranslations("menu");

  return (
    <header className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1>Logo</h1>
          <div className="flex items-center space-x-4">
            {/* <nav className="space-x-2">
              <Link href={"/"}>{t("home")}</Link>
              <Link href={"/"}>{t("about")}</Link>
              <Link href={"/"}>{t("services")}</Link>
              <Link href={"/"}>{t("contact")}</Link>
            </nav> */}
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
