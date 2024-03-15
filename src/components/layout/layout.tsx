import NavbarWrapper from "@/components/app/navbar";
import SidebarWrapper from "@/components/app/sidebar";
import { useLockedBody } from "@/hooks/useBodyLock";
import React from "react";
import { SidebarContext } from "./layout-context";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <NavbarWrapper>
          <section className="flex sm:flex-col md:flex-row">
            <SidebarWrapper />
            {children}
          </section>
        </NavbarWrapper>
      </main>
    </SidebarContext.Provider>
  );
};
