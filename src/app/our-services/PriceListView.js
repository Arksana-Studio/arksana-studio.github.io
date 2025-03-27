"use client";

import priceList from "./price-list-compact.json";
import LabelText from "../../components/LabelText";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Building, Globe, LayoutDashboard, Smartphone } from "lucide-react";
import { appConfig } from "../../configs/AppConfig";

const icons = [
  <Globe className="mb-4 h-8 w-8" key="globe" />,
  <Building className="mb-4 h-8 w-8" key="building" />,
  <Smartphone className="mb-4 h-8 w-8" key={"smartphone"} />,
  <LayoutDashboard className="mb-4 h-8 w-8" key={"dashboard"} />,
];

const PriceCard = ({
  title,
  price,
  description,
  features,
  icon,
  message = "",
}) => {
  const choosePlan = (message) => {
    const links = appConfig.linkContact + encodeURIComponent(message);
    window.open(links, "_blank");
  };
  return (
    <div className="card-glass flex flex-col rounded-lg border shadow-sm transition-shadow hover:shadow-md">
      <div className={"p-4 text-start"}>
        <div className={"flex items-center"}>
          {icon}
          <h2 className="text-md mb-4 ml-2 font-bold">{title}</h2>
        </div>
        <p
          className={
            price != -1 ? "text-3xl" : "text-lg" + " mb-2 font-semibold"
          }
        >
          {price}
        </p>
        {price === "Custom" && (
          <p className="text-sm text-muted-foreground">Based on feature</p>
        )}
        {price !== "Custom" && (
          <div>
            <p className="text-sm text-muted-foreground">
              One time payment (tax excluded)
            </p>
          </div>
        )}
      </div>
      <Separator />
      <div className={"flex h-full flex-col p-6"}>
        <p className="mb-4 text-start text-sm text-muted-foreground">
          {description}
        </p>
        <ul className="mb-6 space-y-2 pt-6 text-start">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <br></br>
        <Button
          className="mt-auto w-full align-baseline"
          onClick={() => choosePlan(message)}
        >
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

const PriceCards = () => {
  const plans = priceList.services.map((service) => ({
    title: service.name,
    price:
      service.price === -1 ? "Custom" : `IDR ${service.price.toLocaleString()}`,
    description: service.description,
    features: service.features,
    message: service.message,
  }));

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Adjust grid columns as needed; here we show 1 column on small screens, 2 on medium, and 4 on large */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            {...plan}
            icon={icons[index]}
            message={plan.message}
          />
        ))}
      </div>
    </div>
  );
};

export const PriceListView = () => {
  return (
    <div
      className={
        "sections flex w-full flex-col place-content-center items-center justify-start pt-24 text-center"
      }
    >
      <LabelText text="Our Services" className="align-top" />
      <h2 className="mt-4 text-3xl font-bold">Choose the Plan that Fits You</h2>
      <p className="my-4 max-w-lg place-self-center text-center text-muted-foreground">
        Our services are designed to meet your needs. Choose the plan that fits
        you best.
      </p>
      <PriceCards />
    </div>
  );
};