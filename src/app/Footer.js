"use client";
import { Separator } from "../components/ui/separator";
import { appConfig } from "../configs/AppConfig";
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import BackgroundBlurMeshFooter from "../components/BackgroundBlurMeshFooter";

const Footer = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionElements = Array.from(
      document.getElementsByClassName("sections"),
    );
    setSections(sectionElements);
  }, []);
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      {/* Stacking */}
      <div className={"relative w-full"}>
        <Separator />
        <div className={"absolute -z-20 w-full"}>
          <BackgroundBlurMeshFooter className={"absolute -z-20"}/>
        </div>
        <footer
          className={"flex w-full max-w-5xl flex-row justify-between px-12 py-12 place-self-center"}
        >
          <div>
            {/* About */}
            <div className="mx-auto flex flex-col items-start gap-2 text-start">
              <div
                className={"flex flex-row items-center justify-center space-x-4"}
              >
                <img
                  src="/logo/arksana_studio_logo.png"
                  alt="Arksana Logo"
                  className="h-12 w-12 justify-center"
                />
                <p className={"text-2xl font-bold"}>Arksana</p>
              </div>
              <p className={"pt-2 text-xl font-bold"}>
                {appConfig.companyLegalName}
              </p>
              <p>{appConfig.address}</p>
              <p>{appConfig.city}</p>
              <a
                href={appConfig.linkContact}
                className="text-white underline hover:text-gray-300"
                _target="_blank"
              >
                +{appConfig.phone}
              </a>
              <div className={"flex flex-row items-center space-x-4"}>
                <a
                  href={"mailto:halo@arksana.my.id"}
                  _target="_blank"
                  className={"text-white underline hover:text-gray-300"}
                >
                  halo@arksana.my.id
                </a>
              </div>
            </div>
            {/* Sosmed */}
            <div className="container mx-auto flex flex-row items-start justify-start pt-4">
              <div className="flex flex-row gap-6">
                <a
                  href="https://www.instagram.com/arksanastudio/"
                  target="_blank"
                  className="inline-flex h-12 items-center gap-1 text-white"
                >
                  <Instagram size={24} />
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@arksanastudio"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-white"
                >
                  <img
                    src={"/tiktok/white.png"}
                    alt={"Tiktok"}
                    className={"h-12"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={"flex-col items-center justify-start"}>
            <p className={"font-bold text-white"}>Quick Links</p>
            <div className={"flex flex-col items-start justify-start gap-2 py-4"}>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-white hover:text-gray-300"
                >
                  {section.ariaLabel}
                </a>
              ))}
            </div>
          </div>
        </footer>
        <Separator />
        <footer className="p-4 py-8 pb-20 text-center text-white">
          <p>&copy;2025 Arksana. All rights reserved.</p>
        </footer>
      </div>

      </div>
  );
};

export default Footer;