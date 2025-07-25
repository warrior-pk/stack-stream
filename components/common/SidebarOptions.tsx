"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeSwitcherMenu from "./ThemeSwitcherMenu";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

import {
  BiHomeAlt2,
  BiTv,
  BiCog,
  BiBook,
  BiBookOpen,
  BiMessageSquare,
  BiBell,
} from "react-icons/bi";

const SidebarOptions = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-svh bg-base-200">
      <div className="flex items-center justify-center h-32 py-6 px-4 gap-2">
        <Logo />
        <Link href="/">
          <span className="text-3xl font-bold">Stack&nbsp;Sphere</span>
        </Link>
      </div>
      <div className="flex flex-col flex-1 py-4">
        <ul className="menu menu-md gap-2 p-2">
          <li>
            <Link
              prefetch={false}
              className={cn("link-hover link", pathname === "/" && "active")}
              href="/"
            >
              <BiHomeAlt2 size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
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
              prefetch={false}
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
              prefetch={false}
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
              prefetch={false}
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
              prefetch={false}
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
          <li className="">
            <ThemeSwitcherMenu />
          </li>
          <li>
            <Link
              prefetch={false}
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
  );
};

export default SidebarOptions;
