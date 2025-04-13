import React from 'react'

import ContentWrapper from '../Layout/ContentWrapper'

import { useResponsive } from '../Layout/ResponsiveProvider'

import "./Header.css"

const HeaderContent = ({}) => {
    const {isMobile, globalWidth} = useResponsive()
    
    return(
        <div className={'Header ' + (isMobile ? "mobile" : "")}>
            <img src="/Logo.png" alt="" />
        </div>
    )  
}


function Header() {
  return (
    // <ContentWrapper ContentComponents={}/>
    <HeaderContent/>
  )
}

export default Header