
import { Divider } from "@nextui-org/react";
import { BackgroundSuggestions, ForegroundSuggestions } from '../background-suggestions';
import ColorInputs from "../color-inputs";
import ContrastResults from "../contrast-results";
import Section from "./section";

const Sidebar = () => (
  <div
    className="transition-transform h-full relative w-full lg:w-96 shrink-0 z-[202] overflow-y-auto sm:border-r sm:border-divider py-6 px-3 md:ml-0 md:flex md:flex-col md:static md:translate-x-0"
  >
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6 px-2">

        <Section label="Contrast Relation">
          <ContrastResults />
        </Section>

        <Divider />

        <Section label="Color Inputs">
          <ColorInputs />
        </Section>

        <Divider className="hidden lg:block" />

        <Section className='hidden lg:block' label="Background suggestions">
          <BackgroundSuggestions />
        </Section>

        <Divider className="hidden lg:block" />

        <Section className='hidden lg:block' label="Foreground suggestions">
          <ForegroundSuggestions />
        </Section>
      </div>
    </div>
  </div>
)

export default Sidebar