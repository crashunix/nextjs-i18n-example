"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      value={{
        dark: "dark",
        light: "light",
        red: "red",
        blue: "blue",
        green: "green",
        system: "system",
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
