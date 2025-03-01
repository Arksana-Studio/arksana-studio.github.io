import LabelText from "../../components/LabelText";
import CardWithImage from "./CardWithImage";

const OurDevelopmentProcSection = () => {
  const cardDatas = [
    {
      name: "Analysis",
      imgSrc: "illus/process.svg",
      alt: "Idea",
      text: "Share your idea with us and we will help you refine it.",
    },
    {
      name: "Development & Test",
      imgSrc: "illus/construct.svg",
      alt: "Analysis",
      text: "We will develop and test your idea to ensure it works as intended.",
    },
    {
      name: "Publish & Maintenance",
      imgSrc: "illus/publish.svg",
      alt: "Publish & Maintenance",
      text: "We will publish your idea and provide maintenance to keep it running.",
    },
  ];

  return (
    <div
      id={"process"}
      className={
        "flex w-full flex-col place-content-center items-center justify-start pt-24 text-center"
      }
    >
      <LabelText text={"Our Development Process"} className={"align-top"} />
      <div className={"flex max-w-2xl flex-col pt-4"}>
        <span className={"mt-4 px-2 text-3xl font-bold"}>
          Your Idea, Our Expertise, One Seamless Development Path
        </span>
        <span className={"max-w-42 my-4 text-muted-foreground"}>
          We transform concepts into high-quality digital solutions with a
          proven workflow.
        </span>
      </div>
      <div
        className={
          "grid max-w-4xl grid-cols-1 md:grid-cols-3 place-content-center items-center justify-center gap-4"
        }
      >
        {/* For*/}
        {cardDatas.map((cardData, index) => {
          return (
            <CardWithImage
              key={index}
              width={"w-1/4"}
              imgSrc={cardData.imgSrc}
              alt={cardData.alt}
              data={cardData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurDevelopmentProcSection;