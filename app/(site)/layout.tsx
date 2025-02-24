import type React from "react";
import Drawer from "@/components/common/Drawer";

interface AppLayoutProps {
  children?: React.ReactNode;
}

function AppLayout({ children, search }: AppLayoutProps) {
  return (
    <Drawer>
      <main className="min-h-screen bg-[url('/background-art.svg')] bg-repeat">
        {search}
        {children}
      </main>
    </Drawer>
  );
}

export default AppLayout;
