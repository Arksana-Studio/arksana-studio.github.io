import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurDevelopmentProcSection from "./OurDevelopmentProcSection";
import CloseSection from "./CloseSection";
import ContactUsSection from "./ContactUsSection";
import { PriceListView } from "../our-services/PriceListView";

const HomeView = () => {
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      <HeroSection />
      <AboutUsSection />
      <PriceListView />
      <OurDevelopmentProcSection/>
      <ContactUsSection />
      <CloseSection />
    </div>
  );
};

export default HomeView;