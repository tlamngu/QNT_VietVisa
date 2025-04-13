import React from "react";

import { useResponsive } from "../Layout/ResponsiveProvider";

function ContentGrid({children}) {
  const { isMobile, globalWidth } = useResponsive();
  
  return <div className={"ServiceGrid " + (isMobile ? "mobile" : "")} style={{width:(isMobile || globalWidth < 1200 ? "100%" : "70%"), padding: "10px"}}>{children}</div>;
}

export default ContentGrid;
