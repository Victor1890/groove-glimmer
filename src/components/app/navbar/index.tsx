import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "@/components/icons/navbar/feedback-icon";
import { GithubIcon } from "@/components/icons/navbar/github-icon";
import { SupportIcon } from "@/components/icons/navbar/support-icon";
import { SearchIcon } from "@/components/icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import DarkModeSwitch from "./darkmodeswitch";

interface Props {
  children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <div className="w-full" />
        {/* <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent> */}
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <DarkModeSwitch />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};

export default NavbarWrapper;