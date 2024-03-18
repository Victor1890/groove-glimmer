import { Divider } from "@nextui-org/react";
import ContrastResults from "../contrast-results";
import Section from "./section";
import ColorInputs from "../color-inputs";

const SidebarWrapper = () => {

  return (
    <aside className="h-auto lg:h-screen z-[202] sticky top-0">
      <div
        className="bg-background transition-transform h-full relative w-full lg:w-96 shrink-0 z-[202] overflow-y-auto sm:border-r sm:border-divider py-6 px-3 md:ml-0 md:flex md:flex-col md:static md:h-screen md:translate-x-0"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 px-2">
            <Section label="Contrast Relation">
              <ContrastResults />
            </Section>
            <Divider />
            <Section label="Color Inputs">
              <ColorInputs />
            </Section>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarWrapper