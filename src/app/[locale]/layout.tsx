import AcessibilityToolbar from "@/components/acessibility/acessibility-toolbar";
import Header from "@/components/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <AcessibilityToolbar />
        <Header />
        <div className="container mx-auto px-4 pt-16 pb-10">{children}</div>
      </NextIntlClientProvider>
    </>
  );
}
