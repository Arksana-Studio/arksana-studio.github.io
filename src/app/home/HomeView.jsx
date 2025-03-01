import HeroSection from "./HeroSection";
import AboutUeSection from "./AboutUeSection";
import OurDevelopmentProcSection from "./OurDevelopmentProcSection";

const HomeView = () => {
  return (
    <div
      className={"flex w-full flex-col items-center justify-center text-center"}
    >
      <HeroSection />
      <AboutUeSection />
      <OurDevelopmentProcSection/>
    </div>
  );
};

export default HomeView;