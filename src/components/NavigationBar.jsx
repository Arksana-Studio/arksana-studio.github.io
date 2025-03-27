"use client";

import { appConfig } from "@configs/AppConfig";
import { ChevronRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const NavigationBar = (className) => {
  const [isOpen, setIsOpen] = useState(false);

  const onNavBarMenuClick = () => {};
  const closeNav = () => setIsOpen(false);
  const onNavClick = (section) => () => {
    closeNav();

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (section === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const navigationLinksHtml = `  
      <li>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
      </li>
      <li>
        <a href="#process" className="hover:text-gray-400">
          Process
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </li>
  `;
  return (
    <div className={"sticky top-0 z-20 h-0 w-full snap-y md:top-4 md:px-4"}>
      <nav id={"navbar"} className="sticky z-20 block h-0 w-full snap-y">
        <div className="card-glass mx-auto flex max-w-4xl flex-row items-center bg-gray-800 p-2 md:rounded-lg md:p-1">
          <div className={"flex flex-1 items-center gap-2"}>
            <img
              onClick={onNavClick("")}
              src={appConfig.logo}
              alt="logo"
              className="h-12 w-12 p-1 md:ml-2 md:h-8 md:w-8"
            />
            <h1 className="ml-2 hidden text-xl font-bold md:block">
              {appConfig.title}
            </h1>
          </div>

          <div className={"md:hidden"}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="flex items-center rounded-lg bg-gray-800 p-2">
                <Menu
                  size={42}
                  className="cursor-pointer hover:text-gray-400"
                  onClick={onNavBarMenuClick}
                />
              </SheetTrigger>
              <SheetContent side={"top"} className={"card-glass"}>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <span className={"text-2xl font-bold"}>Navigation</span>
                  <div className={"flex flex-col gap-2 pt-8"}>
                    <button
                      className="text-left text-xl hover:text-gray-400"
                      onClick={onNavClick("")}
                    >
                      Home
                    </button>
                    <button
                      className="text-left text-xl hover:text-gray-400"
                      onClick={onNavClick("about")}
                    >
                      About
                    </button>
                    <button
                      className="text-left text-xl hover:text-gray-400"
                      onClick={onNavClick("process")}
                    >
                      Process
                    </button>
                    <button
                      className="text-left text-xl hover:text-gray-400"
                      onClick={onNavClick("contact")}
                    >
                      Contact
                    </button>
                    <Button
                      className="mt-8 flex items-center rounded border border-slate-600 bg-slate-800 bg-opacity-70 px-4 py-2 text-white hover:bg-slate-600"
                      onClick={onNavClick("contact")}
                    >
                      <span className="mr-2">Chat with us</span>
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                  <SheetDescription />
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navigation Links */}
          <ul className="flex-2 ml-2 mr-2 hidden flex-grow list-none items-center justify-center gap-6 md:flex">
            <li>
              <button className="hover:text-gray-400" onClick={onNavClick("about")}>About</button>
            </li>
            <li>
              <button className="hover:text-gray-400" onClick={onNavClick("process")}>Process</button>
            </li>
            <li>
              <button className="hover:text-gray-400" onClick={onNavClick("contact")}>Contact</button>
            </li>
          </ul>

          {/* WhatsApp Button */}
          <a
            href={appConfig.linkContact}
            target="_blank"
            rel="noopener noreferrer"
            className={"hidden flex-1 justify-end md:flex"}
          >
            <Button className="bg-opacity-64 flex items-center rounded border border-slate-600 bg-slate-800 px-4 py-2 text-white hover:bg-slate-600">
              <span className="mr-2">Chat with us</span>
              <ChevronRight size={16} />
            </Button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;