import React from "react";
import pro1 from "../../public/S_1.jpg";
import pro2 from "../../public/S_2.jpg";
import pro3 from "../../public/S_3.jpg";

const Hero = ({ t }) => {
  return (
    <section className="relative w-full h-screen mx-auto bg-mh">
      <div
        className={`inset-0 top-[120px] max-w-7xl mt-16 mx-auto sm:px-16 px-6 flex-row flex justify-between items-start gap-5`}
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
          <div className="mt-10 flex justify-center gap-6">
            <img width={250} src={pro1} />
            <img className="hidden sm:block" width={250} src={pro2} />
            <img className="hidden sm:block" width={250} src={pro3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
