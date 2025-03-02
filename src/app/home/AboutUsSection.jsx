import LabelText from "../../components/LabelText";

const AboutUsSection = () => {
  return (
    <div
      className={
        "sections flex min-h-96 flex-col items-center justify-center pt-24 my-24"
      }
      aria-label={"About Us"}
      id={"about"}
    >
      <LabelText text={"About Us"} />
      <h1
        className={
          "mx-auto mt-2 flex max-w-3xl p-2 text-xl font-bold md:text-3xl"
        }
      >
        We help businesses like yours build powerful, scalable, and
        user-friendly websites, mobile apps, and digital solutions to drive
        growth and innovation.
      </h1>
    </div>
  );
};

export default AboutUsSection;