"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "forest",
  "black",
  "dracula",
  "cmyk",
  "night",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export { useTheme, themes };
