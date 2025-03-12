"use client";

export default function LabelText({ text, image, idChild,textClass, label }) {
  return (
    <div
      className={
        "card-glass flex items-center justify-center rounded-lg px-2 py-1 text-center place-self-center"}
    >
      {image && (
        <img src={image} className="mr-2 h-4 w-4" />
      )}
      <span id={idChild} className={"text-xs text-white " + textClass} aria-label={label}>{text}</span>
    </div>
  );
}