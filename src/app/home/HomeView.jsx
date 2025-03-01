import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurDevelopmentProcSection from "./OurDevelopmentProcSection";

const HomeView = () => {
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      <HeroSection />
      <AboutUsSection />
      <OurDevelopmentProcSection/>
    </div>
  );
};

export default HomeView;