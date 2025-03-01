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
      className={
        "flex w-full flex-col items-center justify-center text-center"
      }
    >
      {/* Stacking */}
      <div className={"relative w-full"}>
        <Separator />
        <div className={"relative -z-20 w-full h-0"}>
          <BackgroundBlurMeshFooter className={"absolute -z-20"} />
        </div>
        <footer
          className={
            "max-w-5xl px-12 py-12 w-full justify-between place-self-center flex md:flex-row flex-col gap-8"
          }
        >
          {/* About */}
          <div className={"flex flex-auto items-start"}>
            <div className="flex flex-col items-start gap-2 text-start">
              <div
                className={
                  "flex flex-row items-center justify-center space-x-4"
                }
              >
                <img
                  src={appConfig.logo}
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
                target="_blank" rel="noopener noreferrer"
              >
                +{appConfig.phone}
              </a>
              <div className={"flex flex-row items-center space-x-4"}>
                <a
                  href={"mailto:halo@arksana.my.id"}
                  target="_blank" rel="noopener noreferrer"
                  className={"text-white underline hover:text-gray-300"}
                >
                  halo@arksana.my.id
                </a>
              </div>
            </div>
          </div>
          {/* Sosmed */}
          <div className={"flex flex-col items-start place-items-center"}>
            <div className="container mx-auto flex flex-col items-start justify-start">
              <div className="flex flex-col -translate-x-4">
                <span className="pb-4 pl-4 text-xl font-bold text-white">
                  Follow Us
                </span>
                <a
                  href={appConfig.socialMedia.instagram}
                  target="_blank"
                  className="inline-flex h-12 items-center gap-1 pl-4 text-white"
                >
                  <Instagram size={24} />
                  Instagram
                </a>
                <a
                  href={appConfig.socialMedia.tiktok}
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
          {/* Quick Links */}
          <div className={"flex-col justify-start"}>
            <p className={"text-lg font-bold text-white text-left"}>Quick Links</p>
            <div
              className={"flex flex-col items-start justify-start gap-2 py-4"}
            >
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
          <p>&copy;{new Date().getFullYear()} Arksana. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;