import React from "react";
// import CurveGraphic from "../../../public";

import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

import "./Footer.css";
function Footer() {
  return (
    <footer>
      <img className="FooterCurve" src="/Curve.svg" alt="" />
      <div className="main">
        <div className="overlay"></div>
        <div className="content">
          <div className="FooterGrid">
            <div className="left">
              <div className="Company">
                <img src="/Logo.png" alt="" />
                <h2>QnT - VIETVISA</h2>
              </div>
              <ul>
                <li>
                  <FaHome /> Address: Walter rd East, Bassendean WA 6054
                </li>
                <li>
                  <FaPhoneAlt /> Hotline: +61 431 918882
                </li>
                <li>
                  <MdOutlineEmail />{" "}
                  <a href="mailto:qntvietvisa@gmail.com">
                    qntvietvisa@gmail.com
                  </a>
                </li>
                <li>
                  <AiOutlineGlobal />{" "}
                  <a href="qntvietvisa.com">Website: qntvietvisa.com</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/qntvietvisa">
                    <img src="/facebook.svg" alt="" />
                  </a>
                  <a href="https://zalo.me/61431918882">
                    <img src="/zalo.svg" alt="" srcset="" />
                  </a>
                  <a href="tel:61431918882">
                    <img src="/viber.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.434672476773!2d115.93781717484492!3d-31.89478521953983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b0a9c939c843%3A0x936c8d4e1095da32!2sWalter%20Rd%20E%2C%20Kiara%20WA%206054%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1685443710576!5m2!1svi!2s"
                width="400"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <hr />
          <p className="footerContent">
            ©2023 Allrights reserved{" "}
            <a href="qntvietvisa.com">qntvietvisa.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
