import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { experiencesEN } from "../data/exampleDataEN";
import { experiencesTH } from "../data/exampleDataTH";
import ShowMoreText from "react-show-more-text";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { div } from "framer-motion/client";

const ExCardEN = ({ item }) => {
  return (
    <div>
      <Card className="mt-6 mb-6 w-96 min-h-[470px] flex justify-items-start">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={item.icon} />
        </CardHeader>
        <CardBody className="text-black">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.title}
          </Typography>
          <Typography>
            {item.points.map((item, index) => (
              <p key={index}>
                <ShowMoreText
                  more={
                    <span className="text-black font-bold cursor-pointer">
                      show
                    </span>
                  }
                  less={
                    <span className="text-black font-bold cursor-pointer">
                      less
                    </span>
                  }
                >
                  {item}
                </ShowMoreText>
              </p>
            ))}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a className="cursor-pointer" target="_blank" href={item.link}>
            <Button className="h-10">Read More</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

const ExCardTH = ({ item }) => {
  return (
    <div>
      <Card className="mt-6 mb-6 w-96 min-h-[470px] flex justify-items-start">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={item.icon} />
        </CardHeader>
        <CardBody className="text-black">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.title}
          </Typography>
          <Typography>
            {item.points.map((item, index) => (
              <p key={index}>
                <ShowMoreText
                  more={
                    <span className="text-black font-bold cursor-pointer">
                      show
                    </span>
                  }
                  less={
                    <span className="text-black font-bold cursor-pointer">
                      less
                    </span>
                  }
                >
                  {item}
                </ShowMoreText>
              </p>
            ))}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a className="cursor-pointer" target="_blank" href={item.link}>
            <Button className="h-10">Read More</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

const Experience = ({ t, islan }) => {
  return (
    <div id={t("nav4")}>
      <div className="about-head max-w-calc-customSM md:max-w-calc-customMD lg:xl:max-w-calc-customLG xl:max-w-calc-customXL">
        <div className="sectionSubText">{t("insight")}</div>
        <h2 className="sectionHeadText">{t("experience")}</h2>
        <div className="about-text">{t("expP1")}</div>
        <div className="flex gap-6 w-full flex-wrap justify-center rounded-xl">
          {islan === "en"
            ? experiencesEN.map((item, index) => {
                return <ExCardEN key={index} item={item} islan={islan} />;
              })
            : experiencesTH.map((item, index) => {
                return <ExCardTH key={index} item={item} islan={islan} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
