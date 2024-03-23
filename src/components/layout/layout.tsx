
import Navbar from "@/components/app/navbar";
import Sidebar from "@/components/app/sidebar";
import Footer from "../app/footer";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <header className=" bg-white h-16 flex flex-col justify-center border-1 border-solid fixed w-full top-0 z-10">
        <Navbar />
      </header>
      <main className="flex items-start flex-col lg:flex-row min-h-screen">
        <aside className="w-full lg:h-screen lg:w-auto sticky overflow-auto">
          <Sidebar />
        </aside>
        <section className="bg-tertiary flex-1 w-full overflow-hidden lg:overflow-auto" style={{ height: "calc(100vh - 1px)" }}>
          {children}
          <Footer />
        </section>
      </main>
    </Fragment>
  );
};
