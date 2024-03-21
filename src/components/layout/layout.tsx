
import Navbar from "@/components/app/navbar";
import Sidebar from "@/components/app/sidebar";
import Footer from "../app/footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col lg:flex-row overflow-auto">
        <Sidebar />
        <section className="bg-tertiary flex flex-col flex-1 w-full overflow-auto h-auto md:h-screen">
          {children}
          <Footer />
        </section>
        {/* <section className="bg-tertiary flex flex-col">
          <div className="h-screen">
            {children}
            <Footer />
          </div>
        </section> */}
      </div>
    </main>
  );
};
