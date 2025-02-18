"use client";
import React from "react";
import { useTheme, themes } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import { BiPalette } from "react-icons/bi";

const ThemeSwitcherMenu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <details className="">
      <summary className="">
        <BiPalette size={20} />
        Themes</summary>
      <ul className="menu menu-sm gap-1 text-base-content">
        {themes.map((themeName) => (
          <li key={themeName}>
            <button
              className={cn(theme === themeName && "active")}
              onClick={() => setTheme(themeName)}
            >
              {themeName}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ThemeSwitcherMenu;
