import React, { useState } from "react";
import { certificateEN } from "../data/exampleDataEN";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CardCerti = ({ item }) => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg ">
      <LightGallery
        enableDrag={false}
        counter={false}
        speed={100}
        download={false}
        elementClassNames="custom-wrapper-class"
        onBeforeSlide={onBeforeSlide}
      >
        <img className="w-72 h-[205px] " src={item.cer} />
      </LightGallery>
    </div>
  );
};

const Certificate = ({ t }) => {
  const [isShowMore, setIsShowMore] = useState(true);

  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 1 },
  };

  return (
    <div id={t("nav3")} className="about-head max-w-calc-customSM md:max-w-calc-customMD lg:xl:max-w-calc-customLG xl:max-w-calc-customXL">
      <div className="sectionSubText">{t("achievement")}</div>
      <h2 className="sectionHeadText">{t("certificate")}</h2>
      <div className="about-text">{t("cerP1")}</div>
      <motion.div
        animate={isShowMore ? "open" : "closed"}
        variants={variants}
        className={
          isShowMore
            ? `h-72 overflow-hidden relative py-6 shadow-md`
            : `h-full overflow-hidden py-6 relative shadow-md `
        }
      >
        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          {certificateEN.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded p-1">
                <CardCerti item={item} />
              </div>
            );
          })}
        </div>
      </motion.div>
      <div className="text-center">
        <Link
          activeClass="active"
          to={isShowMore ? "" : t("nav3")}
          spy={true}
          smooth={false}
          duration={100}
        >
          <button
            onClick={handleShowMore}
            className="mt-4 py-2.5 px-6 text-sm rounded-lg bg-gray-700 text-white cursor-pointer font-light text-center shadow-xs transition-all duration-500 hover:bg-gray-900"
          >
            {isShowMore ? t("showMore") : t("showLess")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Certificate;
