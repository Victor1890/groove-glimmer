
import Navbar from "@/components/app/navbar";
import Sidebar from "@/components/app/sidebar";
import Footer from "../app/footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="relative flex flex-col flex-1">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <section style={{ overflow: "auto !important" }} className="bg-tertiary flex flex-col w-full overflow-auto">
          {children}
          <Footer />
        </section>
      </div>
    </main>
  );
};
