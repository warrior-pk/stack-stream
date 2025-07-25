import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import SidebarOptions from "./SidebarOptions";
import Logo from "./Logo";

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
  return (
    <div className="drawer lg:drawer-open">
      <input id="layout-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        {/* Navbar */}

        <nav className="navbar backdrop-blur-sm gap-2 bg-base-100/30 h-16 sticky top-0 px-6">
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

        <main className="m-2 p-2">
          <div className="fixed right-8 bottom-16 btn btn-primary btn-circle btn-lg sm:hidden z-[999]">
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
        <SidebarOptions />
      </div>
    </div>
  );
};

export default Drawer;
