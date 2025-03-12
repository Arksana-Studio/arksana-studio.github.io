const CardWithImage = ({ data }) => {
  return (
    <div className={"card-glass p-2"}>
      <div className={"flex h-72 flex-col place-content-center items-center max-w-64"}>
        <img src={data.imgSrc} alt={data.alt} className={"h-32"} />
        <span className={"mt-4 text-xl font-bold"}>{data.name}</span>
        <span className={"text-muted-foreground"}>{data.text}</span>
      </div>
    </div>
  );
};

export default CardWithImage;