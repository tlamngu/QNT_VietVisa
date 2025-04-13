import React from "react";
import { useResponsive } from "../Layout/ResponsiveProvider.jsx";
import { contents } from "./contents.js";
import { useLanguage } from "../Utils/LanguageSwitch.jsx";

function Content() {
  const { isMobile } = useResponsive();
  const { language, switchLanguage } = useLanguage();

  return (
    <div
      style={{
        width: isMobile ? "100%" : "70%",
        padding: isMobile ? "50px" : "",
        paddingBottom: isMobile ? "0px" : "",
        fontSize: isMobile ? "0.8rem" : "",
      }}
      className="content"
    >
      <div className="LanguageSelection">
        <button className="ButtonEN" onClick={() => switchLanguage("EN")}>
          EN
        </button>
        <button className="ButtonVN" onClick={() => switchLanguage("VN")}>
          VN
        </button>
      </div>
      {contents[language]?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Content;