"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Theme</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Default</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Dos top</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme("red")}>Red</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>
          Green
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
