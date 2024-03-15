import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React, { Fragment } from "react";
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
    <Fragment>
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
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <DarkModeSwitch />
        </NavbarContent>
      </Navbar>
      {children}
    </Fragment>
  );
};

export default NavbarWrapper;