import React from "react";
import { servicesEN } from "../data/exampleDataEN";
import { servicesTH } from "../data/exampleDataTH";

const Contact = ({ t, islan }) => {
  return (
    <section id={t("nav6")} className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-24 clear-left md:mb-10 mb-10">
          <div className=" md:mb-0 mb-4">
            <h2 className="text-white font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
            {t("contactH")}
            </h2>
            <p className="text-white text-lg font-normal leading-7 mb-7 md:text-left text-center">
            {t("contactP")}
            </p>
            <div className="flex md:items-center md:justify-start justify-center">
              <a href="mailto:MosT5140@hotmail.com?subject=เชิญชวนให้ร่วมงานกับ.....&body=HRจาก.... ขอเรียนเชิญ คุณ ฉัตรคุปต์ กลิ่นอุบล รับข้อเสนอ....">

              <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
                {t("contactb")}
              </button>
              </a>
            </div>
          </div>
          <div className="border-l-2 md:border-white border-white px-10 py-6">
            <div className="mb-8">
              <h6 className="text-gray-300 text-sm font-medium leading-5 pb-3 md:text-start text-center">
              {t("contactc1")}
              </h6>
              <h3 className="text-white text-xl font-semibold leading-8 md:text-start text-center">
                MosT5140@hotmail.com
              </h3>
            </div>
            <div className="mb-8">
              <h6 className="text-gray-300 text-sm font-medium leading-5 pb-3 md:text-start text-center">
              {t("contactc2")}
              </h6>
              <h3 className="text-white text-xl font-semibold leading-8 md:text-start text-center">
                085-855-4668
              </h3>
            </div>
            <div>
              <h6 className="text-gray-300 text-sm font-medium leading-5 pb-3 md:text-start text-center">
              {t("contactc3")}
              </h6>
              <h3 className="text-white text-xl font-semibold leading-8 md:text-start text-center">
                most5140
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
