import {React, useRef} from "react";

import { services } from "./contents";

import { ImCheckmark } from "react-icons/im";

import {
  ResponsiveProvider,
  useResponsive,
} from "../Layout/ResponsiveProvider";

import { useLanguage } from "../Utils/LanguageSwitch";
import useObservation from "../Utils/ObservationProvider";



const CServiceCard = ({ title, services, direction}) => {
  const ServiceRef = useRef(null)
  const isVisible = useObservation(ServiceRef, {threshold:0})
  const { isMobile, globalWidth } = useResponsive();
  return (
    <div className={`ServiceCard ${direction} ${isVisible ? "show" : ""}`} ref={ServiceRef}>
      <div className="floatingHeader">
        <div className="Heading" style={{ width: isMobile ? "80%" : "70%" }}>
          <div className="HeadingContent">
            <h2 className="TitleBG">{title}</h2>
          </div>
        </div>
      </div>
      <div className="ServiceContent">
        <ul>
          {services.map((e, ind) => {
            return (
              <li key={ind}>
                <div className="centeredIcon">{<ImCheckmark />}</div>
                <p>{e}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function ServiceCard() {
  const { isMobile, globalWidth } = useResponsive();
  const { language, switchLanguage } = useLanguage();

  return (
    <>
      <CServiceCard
        title={
          language == "VN" ? services.VN2AU.TITLEVN : services.VN2AU.TITLEEN
        }
        direction="left"
        services={language == "VN" ? services.VN2AU.VN : services.VN2AU.EN}
      />
      <CServiceCard
        title={
          language == "VN" ? services.AU2VN.TITLEVN : services.AU2VN.TITLEEN
        }
        direction="right"
        services={language == "VN" ? services.AU2VN.VN : services.AU2VN.EN}
      />
    </>
  );
}

export default ServiceCard;
