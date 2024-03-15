import { FilterIcon } from "@/components/icons/sidebar/filter-icon";
import { SettingsIcon } from "@/components/icons/sidebar/settings-icon";
import { Avatar, Divider, Tooltip } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { CheckFill } from "@/components/icons/checks";
import { EmojiVeryHappyFill } from "@/components/icons/emoji";
import Section from "./section";

const SidebarWrapper = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      <div
        className="bg-background transition-transform h-full relative w-96 sm:w-full md:w-96 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 px-2">
            {/* <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            /> */}
            <Section label="Contrast Relation">

            </Section>
            <section>
              <h2 className="text-xl font-medium mb-6">Contrast Relation</h2>
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex justify-between items-end" style={{ color: "#079455" }}>
                  <div>
                    <span className="text-lg mb-1 font-medium block capitalize">very good</span>
                    <span className="text-5xl font-bold block">15.04</span>
                  </div>
                  <EmojiVeryHappyFill className="text-4xl" />
                </div>
                <ul className="grid gap-y-5 gap-x-8 md:flex-1 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>
                      <span className="mb-2 text-black uppercase">normal text</span>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">AA - 4.5:1</span>
                        <CheckFill className="text-2xl text-green-700" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <Divider />
          </div>
          <div className="flex items-center justify-center gap-6 pt-16 pb-8 px-8 md:pt-10 md:pb-0">
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarWrapper