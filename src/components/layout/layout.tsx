
import Navbar from "@/components/app/navbar";
import Sidebar from "@/components/app/sidebar";
import Footer from "../app/footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <section className="bg-tertiary flex flex-col w-full">
          {children}
          <Footer />
        </section>
      </div>
    </main>
  );
};
