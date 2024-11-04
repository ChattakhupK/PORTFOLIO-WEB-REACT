import React from "react";

const Hero = ({ t }) => {
  return (
    <section className="relative w-full h-screen mx-auto bg-mh">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="mt-16">
          <h1 className="heroHeadText">
            {t("Hello")} <span className="text-[#16c734]">{t("Nickname")}</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            {t("info1")}
            <br />
            {t("info2")}
            <br />
            {t("info3")}
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
