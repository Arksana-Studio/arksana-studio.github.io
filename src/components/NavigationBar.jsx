import {appConfig} from "@configs/AppConfig";
import {ChevronRight} from "lucide-react";
import BackgroundBlurMesh from "./BackgroundBlurMesh";
import { Button } from "./ui/button";

const NavigationBar = (className) => {
  return (
    <nav className="w-full z-20 snap-y sticky top-4 h-0 px-4" id={"navbar"}>
      <div
        className="flex flex-row card-glass bg-gray-800 p-1 rounded-lg items-center max-w-[1000] mx-auto">

        <div className={"flex items-center gap-2 flex-1"}>
          <img src="/logo/arksana_studio_logo.png" alt="logo" className="w-8 h-8 ml-2"/>
          <h1 className="text-xl font-bold ml-2">{appConfig.title}</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 list-none items-center flex-grow justify-center ml-2 mr-2 flex-2">
          <li><a href="#process" className="hover:text-gray-400">Process</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* WhatsApp Button */}
        <a href={appConfig.linkContact} target="_blank" rel="noopener noreferrer" className={"flex-1 flex justify-end"}>
          <Button className="bg-slate-800 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center">
            <span className="mr-2">Chat with us</span><ChevronRight size={16}/>
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;