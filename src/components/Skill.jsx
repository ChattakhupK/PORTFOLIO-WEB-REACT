import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faBootstrap,
  faFigma,
  faStripe,
  faSquareGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import tailwind from "../assets/mySkillLogo/Tailwind.png";
import firebase from "../assets/mySkillLogo/Firebase.png";
import mySql from "../assets/mySkillLogo/Mysql.png";
const Skill = ({t}) => {
  return (
    <div id={t('nav2')} className="about-head">
      <div className="sectionSubText">{t("skill")}</div>
      <h2 className="sectionHeadText">{t("ability")}</h2>
      <div className="about-text">
      {t("skillP1")}
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        <div className="flex gap-7 p-6 justify-center items-center  flex-wrap ">
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faHtml5} />
            <p className="mt-2 font-bold">HTML</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faCss3Alt} />
            <p className="mt-2 font-bold">CSS</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faJs} />
            <p className="mt-2 font-bold">JAVASCRIPT</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faReact} />
            <p className="mt-2 font-bold">REACT</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faNodeJs} />
            <p className="mt-2 font-bold">NODE.JS</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center ">
            <img className="w-[80px] h-[80px]" src={tailwind} />
            <p className="mt-2 font-bold">TAILWIND</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faBootstrap} />
            <p className="mt-2 font-bold">BOOTSTRAP</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faFigma} />
            <p className="mt-2 font-bold">FIGMA</p>
          </div>
          <div className="text-center">
          <img className="w-[80px] h-[80px]" src={firebase} />
            <p className="mt-2 font-bold">FIREBASE</p>
          </div>
          <div className="text-center">
          <img className="w-[80px] h-[80px]" src={mySql} />
            <p className="mt-2 font-bold">MYSQL</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faStripe} />
            <p className="mt-2 font-bold">STRIPE</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faSquareGithub} />
            <p className="mt-2 font-bold">GITHUB</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon size="5x" icon={faGit} />
            <p className="mt-2 font-bold">GIT</p>
          </div>
        </div>
      </div>
      <hr className="my-6" />
    </div>
  );
};

export default Skill;
