import Header from "@/components/common/Header";

interface PublicLayoutProps {
  children?: React.ReactNode;
}

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-[url('/background-art.svg')] bg-repeat">
      <Header />
      <main className="container relative mx-auto flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}

export default PublicLayout;
