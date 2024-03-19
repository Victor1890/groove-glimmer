import { Navbar, NavbarContent } from "@nextui-org/react";
import React, { Fragment } from "react";
import { BurguerButton } from "./burguer-button";
import DarkModeSwitch from "./darkmodeswitch";

interface Props {
  children: React.ReactNode;
}

const NavbarWrapper = () => {
  return (
    <Navbar
      isBordered
      className="flex flex-col justify-center z-10 relative"
      classNames={{
        wrapper: "w-full max-w-full",
        content: "flex flex-row justify-between w-full max-w-full px-4 py-2",
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
  );
};

export default NavbarWrapper;