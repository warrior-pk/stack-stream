"use client";
import type React from "react";
import Drawer from "@/components/common/Drawer";

interface AppLayoutProps {
  children?: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Drawer>
      <main className="min-h-screen bg-[url('/background-art.svg')] bg-repeat">
        {children}
      </main>
    </Drawer>
  );
}

export default AppLayout;
