"use client";
import { useEffect, useState } from "react";
import { useTheme, themes } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";
import { BiPalette } from "react-icons/bi";

const ThemeSwitcherMenu = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return something that won't mismatch the server HTML
    return null;
  }

  return (
    <details>
      <summary>
        <BiPalette size={20} />
        Themes
      </summary>
      <ul className="menu menu-sm gap-1 text-base-content">
        {themes.map((themeName) => (
          <li key={themeName}>
            <button
              type="button"
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
