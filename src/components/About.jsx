import React from "react";
import { servicesEN } from "../data/exampleDataEN";
import { servicesTH } from "../data/exampleDataTH";

const CardAboutEN = ({ item }) => {
  return (
    <div>
      <div className="xs:w-[320px] h-[500px] flex justify-between flex-col w-96 my-6 bg-white shadow-sm border border-slate-200 rounded-md">
        <div className="h-60  p-1 py-auto bg-black  text-white rounded-t-md">
          <img
            className="rounded-t-md"
            style={{ width: "100%", height: "230px" }}
            src={item.image}
          />
        </div>
        <div className="p-4 flex justify-between h-48 flex-col">
          <div className="px-2">
            <h5 className="mb-2 block text-slate-800 text-xl font-semibold">
              {item.title}
            </h5>
            <p className="text-slate-600 leading-normal font-light">{item.p}</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a target="_blank" href={item.link}>
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const CardAboutTH = ({ item }) => {
  return (
    <div>
      <div className="xs:w-[320px] h-[500px] flex justify-between flex-col w-96 my-6 bg-white shadow-sm border border-slate-200 rounded-md">
        <div className="h-60  p-1 py-auto bg-black  text-white rounded-t-md">
          <img
            className="rounded-t-md"
            style={{ width: "100%", height: "230px" }}
            src={item.image}
          />
        </div>
        <div className="p-4 flex justify-between h-48 flex-col">
          <div className="px-2">
            <h5 className="mb-2 block text-slate-800 text-xl font-semibold">
              {item.title}
            </h5>
            <p className="text-slate-600 leading-normal font-light">{item.p}</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a target="_blank" href={item.link}>
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              ดูเพิ่มเติม
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const About = ({ t, islan }) => {
  return (
    <div
      id={t("nav1")}
      className="about-head max-w-calc-customSM md:max-w-calc-customMD lg:xl:max-w-calc-customLG xl:max-w-calc-customXL"
    >
      <div className="sectionSubText">{t("intro")}</div>
      <h2 className="sectionHeadText">{t("introHead")}</h2>
      <div className="about-text">
        {t("aboutP1")}
        <br />
        {t("aboutP2")}
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        {islan === "en"
          ? servicesEN.map((item, index) => {
              return (
                <div className="" key={index}>
                  <CardAboutEN item={item} />
                </div>
              );
            })
          : servicesTH.map((item, index) => {
              return (
                <div className="" key={index}>
                  <CardAboutTH item={item} />
                </div>
              );
            })}
      </div>
      <hr className="my-6" />
    </div>
  );
};

export default About;
