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
  );
};

export default NavbarWrapper;