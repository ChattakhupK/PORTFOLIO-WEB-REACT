import "./App.css";
import Hero from "./components/Hero";
import Navbars from "./components/Navbars";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Skill from "./components/Skill";
import "./components/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [islan, setIslan] = useState("en");

  const changeLanguage = (e) => {
    console.log(e);
    i18n.changeLanguage(e);
    setIslan(e);
  };
  return (
    <div className="">
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbars t={t} changeLanguage={changeLanguage} />
        </div>
      </div>
      <Hero t={t} />
      <div className="mt-6">
        <About t={t} islan={islan} />
        <Skill t={t} />
        <Certificate t={t} />
      </div>
      <Experience t={t} islan={islan} />
    </div>
  );
}

export default App;
