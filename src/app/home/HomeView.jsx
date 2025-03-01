import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurDevelopmentProcSection from "./OurDevelopmentProcSection";
import ContactUs from "./ContactUs";

const HomeView = () => {
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      <HeroSection />
      <AboutUsSection />
      <OurDevelopmentProcSection/>
      <ContactUs />
    </div>
  );
};

export default HomeView;