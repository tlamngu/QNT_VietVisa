import React from "react";

import GridLayout from "../Layout/GridLayout";

import VisaGraphic from "./VisaGraphic";

import { useResponsive } from "../Layout/ResponsiveProvider";


export const BannerGraphics = () => {
    const { isMobile, globalWidth } = useResponsive();
    return (
        <GridLayout
            style={{ width: (isMobile ? "100%" : "90%"), margin: "auto", marginTop:"5vh",  }}
            Left={
                <>
                    <div className="OperaHouse" style={{width:(isMobile ? "60%": "100%")}}>
                        <img src="/OperaHouse.png"alt="" />
                    </div>
                </>
            }
            Right={
                <VisaGraphic />
            }
        />
    )
}
