import { GithubIcon } from "@/components/icons/navbar";
import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./darkmodeswitch";

interface Props {
  children: React.ReactNode;
}

const NavbarWrapper = () => {
  return (
    <div className="max-w-full mx-0 px-4 md:px-6">
      <nav className="flex items-center justify-between flex-wrap gap-5">
        <div className="font-bold flex items-center text-[1.25rem] leading-8">
          Groove Glimmer
        </div>
        <div className="flex flex-row items-center gap-5">
          <DarkModeSwitch />
          <Link
            target="_blank"
            aria-label="Star on Github"
            className="inline-flex font-medium"
            href={"https://github.com/Victor1890/groove-glimmer"}
          >
            <GithubIcon width={22} height={22} className="sm:mr-2 text-base" />
            <span className="hidden sm:block">Github</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWrapper;