import { useState, useRef } from "react";

import "./App.css";

//fonts

import "./fonts/Roboto.ttf";

import {
  useResponsive,
  ResponsiveProvider,
} from "./components/Layout/ResponsiveProvider";

import ContentWrapper from "./components/Layout/ContentWrapper";

import Content from "./components/Content/Content";

import Header from "./components/Header/Header";

import BannerBackground from "./components/Banner/BannerBackground";

import { BannerGraphics } from "./components/Banner/BannerGraphics";

import ServiceCard from "./components/Content/ServiceCard";

import ContentGrid from "./components/Content/ContentGrid";

import Form from "./components/Form/Form";

import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./components/Utils/LanguageSwitch";
import useObservation from "./components/Utils/ObservationProvider";


const HeadingContent = ({ h1, h2 }) => {
  const { isMobile, globalWidth } = useResponsive();
  const HeadingRef = useRef()
  const isVisible = useObservation(HeadingRef, {threshold:0.3})
  return (
    <div className={"ServiceSectionHeader " + (isMobile ? "mobile " : " ") + (isVisible ? "visible" : "")} ref={HeadingRef}>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
      <hr />
    </div>
  );
};

const OverlayContact = () => {
  return(
    <div className="overlayContacts">
      <a href="https://zalo.me/61431918882">
        <img src="/zalo.svg" alt="" />
      </a>
      <a href="https://www.facebook.com/qntvietvisa">
        <img src="/messenger.png" alt="" />
      </a>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <ResponsiveProvider>
      <LanguageProvider>
        <OverlayContact></OverlayContact>
        <ContentWrapper
          OverlayComponents={<Header />}
          ContentComponents={
            <>
              <BannerGraphics />
            </>
          }
          BackgroundComponents={
            <>
              <BannerBackground />
            </>
          }
        />
        <Content />
        <HeadingContent
          h1={"SERVICES FOR AUSTRALIAN AND VIETNAMESE"}
          h2={"DỊCH VỤ DÀNH CHO NGƯỜI ÚC VÀ VIỆT NAM"}
        />

        <ContentGrid>
          <ServiceCard />
        </ContentGrid>
        <HeadingContent
          h1={"GET MORE INFORMATION"}
          h2={"NHẬN THÔNG TIN TƯ VẤN"}
        />
        <Form />
        <Footer />

      </LanguageProvider>
    </ResponsiveProvider>
  );
}

export default App;
