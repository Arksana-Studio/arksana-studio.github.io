import LabelText from "../../components/LabelText";

const AboutUeSection = () => {
  return (
    <div className={"flex flex-col items-center justify-center min-h-52 sections"} aria-label={"About Us"} id={"about-us"}>
      <LabelText text={"About Us Section"} />
      <h1 className={"flex text-xl md:text-3xl font-bold mx-auto max-w-3xl mt-2 p-4"}>
        We help businesses like yours build powerful, scalable, and
        user-friendly websites, mobile apps, and digital solutions to drive
        growth and innovation.
      </h1>
    </div>
  );
};

export default AboutUeSection;