"use client";
interface DrawerProps {
  children?: React.ReactNode;
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ThemeSwitcherMenu from "./ThemeSwitcherMenu";
import { useEffect, useState } from "react";
import { BiUser, BiSearch, BiHomeAlt2, BiTv, BiCog } from "react-icons/bi";
import LogoutButton from "./LogoutButton";
import SearchModal from "./SearchModal";
import logo from "@/public/logo.svg";

const Drawer = ({ children }: DrawerProps) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);
  return (
    <div className="drawer lg:drawer-open">
      <input id="layout-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar  top-0 w-full gap-2 bg-base-100">
          <div className="flex-1 lg:invisible">
            <label
              htmlFor="layout-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18h16M4 14h16"
                ></path>

                <circle
                  cx="12"
                  cy="10"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>{" "}
            </label>
            <div className="invisible sm:visible lg:invisible">
              <Link href={"/"} className="btn-sm btn-ghost">
                <h1 className="">Stack&nbsp;Sphere</h1>
              </Link>
            </div>
          </div>
          <div className=" md:gap-4">
            <button
              type="button"
              className="btn btn-circle btn-ghost tooltip tooltip-bottom grid place-items-center"
              data-tip="Search"
              onClick={() => {
                const searchModal = document.getElementById("search-modal");
                if (searchModal) {
                  // @ts-ignore
                  searchModal.showModal();
                }
              }}
            >
              <SearchModal />
              <BiSearch size={28} />
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <button className="btn btn-circle">
                  {user ? (
                    <Image
                      alt="avatar"
                      // @ts-ignore
                      src={user?.image}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <BiUser size={40} />
                  )}
                </button>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content menu-md z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <div>
                  {/* @ts-ignore */}
                  <h4>Hi, {user ? user.name : "there"} 👋</h4>
                </div>
                <span className="divider" />
                <li>
                  <Link href="/profile">
                    <BiUser size={20} />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings">
                    <BiCog size={20} />
                    Settings
                  </Link>
                </li>
                <span className="divider" />
                <LogoutButton />
              </ul>
            </div>
          </div>
        </nav>
        <main className="p-2">{children}</main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="layout-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        {/* Sidebar content here */}
        <ul className="menu menu-md min-h-full w-80 gap-2 bg-base-200 p-2">
          <div className="mt-4 mb-16 text-center">
            <h1 className="">Stack Sphere</h1>
          </div>
          <li>
            <Link
              className={cn("link-hover link", pathname === "/" && "active")}
              href="/"
            >
              <BiHomeAlt2 size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "link-hover link",
                pathname === "/channel" && "active"
              )}
              href="/channel/123/c/update"
            >
              <BiTv size={20} />
              Channel
            </Link>
          </li>
          <li>
            <ThemeSwitcherMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
