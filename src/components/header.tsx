import { useLocale, useTranslations } from "next-intl";
import ThemeSwitcher from "./theme-switcher";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";
import Link from "./link";

const Header = () => {
  const t = useTranslations("Menu");
  const tLocale = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <header className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1>Logo</h1>
          <div className="flex items-center space-x-4">
            <nav className="space-x-2">
              <Link href={"/"}>{t("home")}</Link>
              <Link href={"/about"}>{t("about")}</Link>
              <Link href={"/services"}>{t("services")}</Link>
              <Link href={"/"}>{t("contact")}</Link>
            </nav>
            {/* <LocaleSwitcher /> */}
            <LocaleSwitcherSelect
              defaultValue={locale}
              label={tLocale("label")}
            >
              {routing.locales.map((cur) => (
                <option key={cur} value={cur}>
                  {tLocale("locale", { locale: cur })}
                </option>
              ))}
            </LocaleSwitcherSelect>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
