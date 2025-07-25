"use client";
import Link from "next/link";
import { themes, useTheme } from "@/context/ThemeProvider";
import { BiPalette, BiSolidPalette } from "react-icons/bi";

const Header = () => {
  const { setTheme } = useTheme();
  const setRandomTheme = () => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    setTheme(themes[randomIndex]);
  };

  return (
    <header className="navbar text-primary-content container mx-auto my-4 rounded-md bg-primary">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost">
          <h1 className="">Stack Sphere</h1>
        </Link>
      </div>
      <div
        className="tooltip px-2"
        data-tip="random theme"
        onClick={() => setRandomTheme()}
      >
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          <BiPalette className="swap-on h-8 w-8" />
          <BiSolidPalette className="swap-off h-8 w-8" />
        </label>
      </div>
    </header>
  );
};

export default Header;
