"use client";

import LabelText from "../../components/LabelText";
import { appConfig } from "../../configs/AppConfig";
import { Button } from "../../components/ui/button";
import MiddleBlur from "./MiddleBlur";

const CloseSection = () => {
  return (
    <div className={"relative flex flex-col items-center justify-center w-full min-h-96 py-24 background-blur-center"} id={"close-section"} aria-label={"Let's Talk"}>
      <div
        className={"my-24 flex flex-col items-center justify-center text-center"}
      >
        <LabelText text={"Arksana"} image={appConfig.logo} />
        <span className={"max-w-80 px-2 pt-8 text-4xl font-bold"}>
        Let&#39;s Talk About Your Big Ideas
      </span>
        <span className={"text-xl pt-4 text-muted-foreground"}>We are ready to help you anytime</span>
        <div className={"mt-8 flex flex-col items-center justify-center gap-2"}>
          <Button
            className={"button"}
            onClick={() => window.open(appConfig.linkContact, "_blank")}
          >
            Contact Us
          </Button>
          <span className={"text-lg text-muted-foreground"}>
          It&#39;s <span className={"text-primary"}>free</span>
        </span>
        </div>
      </div>
    </div>
  );
};

export default CloseSection;