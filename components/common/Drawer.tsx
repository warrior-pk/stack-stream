import Link from "next/link";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import ThemeSwitcherMenu from "./ThemeSwitcherMenu";
import {
  BiSearch,
  BiHomeAlt2,
  BiTv,
  BiCog,
  BiBook,
  BiBookOpen,
  BiMessageSquare,
  BiBell,
} from "react-icons/bi";
import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block stroke-current"
    width={40}
  >
    <title>Logo Icon</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 18h16M4 14h16"
    />

    <circle
      cx="12"
      cy="10"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const SearchButton = () => (
  <Link href={"/search"}>
    <button
      type="button"
      className="btn btn-circle btn-ghost tooltip tooltip-bottom grid place-items-center"
    >
      <BiSearch size={28} />
    </button>
  </Link>
);

interface DrawerProps {
  children?: React.ReactNode;
}

const Drawer = async ({ children }: DrawerProps) => {
  const headersList = await headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  const url = new URL(header_url);
  const pathname = url.pathname;
  return (
    <div className="drawer lg:drawer-open">
      <input id="layout-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar sticky top-0 backdrop-blur-sm w-full gap-2 bg-base-100/30 h-16">
          <div className="flex-1 lg:invisible">
            <label
              htmlFor="layout-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Logo />
            </label>
            <div className="invisible sm:visible lg:invisible">
              <Link href={"/"} className="btn-sm btn-ghost">
                <span className="text-3xl font-bold">Stack&nbsp;Sphere</span>
              </Link>
            </div>
          </div>
          <div className=" md:gap-4">
            <div className="hidden sm:block">
              <SearchButton />
            </div>
            <UserButton />
            <SignedOut>
              <SignInButton>
                <button type="button" className="btn btn-primary">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
        <main className="p-2">
          <div className="fixed right-8 bottom-16 btn btn-primary btn-circle btn-lg sm:hidden">
            <SearchButton />
          </div>
          {children}
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="layout-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        {/* Sidebar content here */}
        <div className="flex flex-col min-h-svh bg-base-200">
          <div className="flex items-center justify-center h-32 py-6 px-4 gap-2">
            <Logo />
            <Link href="/">
              <span className="text-3xl font-bold">Stack&nbsp;Sphere</span>
            </Link>
          </div>
          <div className="flex flex-col flex-1 py-4">
            <ul className="menu menu-md gap-2 p-2 flex-1">
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname === "/" && "active"
                  )}
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
                    pathname.startsWith("/channel") && "active"
                  )}
                  href="/channel/123"
                >
                  <BiTv size={20} />
                  Channel
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname.startsWith("/blogs") && "active"
                  )}
                  href="/blogs"
                >
                  <BiBook size={20} />
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname.startsWith("/threads") && "active"
                  )}
                  href="/threads"
                >
                  <BiMessageSquare size={20} />
                  Threads
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname.startsWith("/subscriptions") && "active"
                  )}
                  href="/subscriptions"
                >
                  <BiBell size={20} />
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname.startsWith("/courses") && "active"
                  )}
                  href="/courses"
                >
                  <BiBookOpen size={20} />
                  Courses
                </Link>
              </li>
            </ul>
            <ul className="menu menu-md gap-2 p-2 h-full">
              <span className="divider" />
              <li>
                <ThemeSwitcherMenu />
              </li>
              <li>
                <Link
                  className={cn(
                    "link-hover link",
                    pathname.startsWith("/settings") && "active"
                  )}
                  href="/settings"
                >
                  <BiCog size={20} />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
