import { resumeAll } from "../data/exampleDataEN";
import LightGallery from "lightgallery/react";
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const CardCerti = ({ item }) => {
  return (
    <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg ">
      <LightGallery
        enableDrag={false}
        counter={false}
        speed={100}
        download={true}
        elementClassNames="custom-wrapper-class"
        zoomFromOrigin={true}
        zoom={true}
        plugins={[lgThumbnail, lgZoom]}
        
      >
        <img className=" h-[305px] " src={item.resume} />
      </LightGallery>
    </div>
  );
};

const Resume = ({ t }) => {


  return (
    <div id={t("nav5")} className="about-head max-w-calc-customSM md:max-w-calc-customMD lg:xl:max-w-calc-customLG xl:max-w-calc-customXL">
      <div className="sectionSubText">{t("Portfolio")}</div>
      <h2 className="sectionHeadText">{t("Resume")}</h2>
      <div className="about-text">{t("ResumeP1")}</div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          {resumeAll.map((item, index) => {
            return (
              <div key={index} className="bg-white rounded p-1">
                <CardCerti item={item} />
              </div>
            );
          })}
        </div>
        <hr className="my-6" />
    </div>
  );
};

export default Resume;
