import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesEN } from "../data/exampleDataEN";
import { experiencesTH } from "../data/exampleDataTH";
import ShowMoreText from "react-show-more-text";

import myLogo from "../assets/reac.png";
import myLogoReact from "../assets/React.png";

const WorkIcon = () => (
  <>
    <img className="vertical-timeline-element-icon bounce-in" src={myLogo} />
  </>
);
const ExCardEN = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={item.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<WorkIcon />}
    >
      <div className="mb-2 ">
        <h3 className="vertical-timeline-element-title text-center font-bold">
          {item.title}
        </h3>
      </div>
      <div className="w-full flex gap-2"></div>
      <div className="mb-1">
        <img src={item.icon} />
      </div>
      <span className="inline-flex items-center my-2 gap-x-2.5 py-1.5 px-2 rounded-full text-xs font-medium bg-white text-gray-600">
        <div className="w-full text-center ">{item.code_name}</div>
      </span>
      <ul>
        {item.points.map((item, index) => (
          <li key={index}>
            <ShowMoreText
              more={
                <span className="text-black cursor-pointer">Show more</span>
              }
              less={
                <span className="text-black cursor-pointer">Show less</span>
              }
            >
              {item}
            </ShowMoreText>
          </li>
        ))}
      </ul>
      <div className="flex">
        <a className="cursor-pointer" target="_blank" href={item.link}>
          <button
            className="mt-2 rounded-md bg-gray-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:shadow-none hover:bg-slate-200 hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Watch
          </button>
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

const ExCardTH = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={item.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<WorkIcon />}
    >
      <div className="mb-2 ">
        <h3 className="vertical-timeline-element-title text-center font-bold">
          {item.title}
        </h3>
      </div>
      <div className="w-full flex gap-2"></div>
      <div className="mb-1">
        <img src={item.icon} />
      </div>
      <span className="inline-flex items-center my-2 gap-x-2.5 py-1.5 px-2 rounded-full text-xs font-medium bg-white text-gray-600">
        <div className="w-full text-center ">{item.code_name}</div>
      </span>
      <ul>
        {item.points.map((item, index) => (
          <li key={index}>
            {" "}
            <ShowMoreText
              more={
                <span className="text-black cursor-pointer">อ่านเพิ่มเติม</span>
              }
              less={
                <span className="text-black cursor-pointer">ย่อขนาด</span>
              }
            >
              {item}
            </ShowMoreText>
          </li>
        ))}
      </ul>
      <div className="flex">
        <a className="cursor-pointer" target="_blank" href={item.link}>
          <button
            className="mt-2 rounded-md bg-gray-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:shadow-none hover:bg-slate-200 hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            ดูเพิ่มเติม
          </button>
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = ({ t, islan }) => {
  return (
    <div id={t("nav4")}>
      <div className="about-head max-w-calc-customSM md:max-w-calc-customMD lg:xl:max-w-calc-customLG xl:max-w-calc-customXL">
        <div className="sectionSubText">{t("insight")}</div>
        <h2 className="sectionHeadText">{t("experience")}</h2>
        <div className="about-text">{t("expP1")}</div>
        <VerticalTimeline>
          {islan === "en"
            ? experiencesEN.map((item, index) => {
                return <ExCardEN key={index} item={item} islan={islan} />;
              })
            : experiencesTH.map((item, index) => {
                return <ExCardTH key={index} item={item} islan={islan} />;
              })}
          <VerticalTimelineElement
            date={islan === "en" ? "Now" : "ตอนนี้"}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<WorkIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
