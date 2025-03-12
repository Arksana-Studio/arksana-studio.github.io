import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurDevelopmentProcSection from "./OurDevelopmentProcSection";
import CloseSection from "./CloseSection";
import ContactUsSection from "./ContactUsSection";

const HomeView = () => {
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      <HeroSection />
      <AboutUsSection />
      <OurDevelopmentProcSection/>
      <ContactUsSection />
      <CloseSection />
    </div>
  );
};

export default HomeView;