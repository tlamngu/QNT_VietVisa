/* 

ContentWrapper The ContentWrapper serves as a dynamic container for managing content dimensions. 
Its size adapts based on the user's device, ensuring an optimal user experience. 

Key features include:

Dynamic Sizing: Adjusts seamlessly to different screen sizes and resolutions.
Floating Layer: Provides a flexible layer for positioning and layout.
Custom Backgrounds: Allows for personalized or dynamic background settings.
This setup ensures content is visually appealing, accessible, and tailored to diverse devices.

*/

import React, { useEffect, useState } from 'react'

import { useResponsive } from './ResponsiveProvider'

import "./Layout.css"

function ContentWrapper({ BackgroundComponents, ContentComponents, OverlayComponents, UseContentHeight = false, className = ''}) {
    const {isMobile, globalWidth} = useResponsive()
    const [width, setWidth] = useState(100)
    useEffect(()=>{
        if(isMobile){
            setWidth(100)
        }else{
            setWidth(85)
        }
    }, [isMobile])
    return (
        <div className={'ContentWrapper ' + className} >
            <div className={"BackgroundComponents "} >
                {BackgroundComponents}
            </div>
            <div className={"ContentComponents " } style={{ width: `${width}%` }}>
                {ContentComponents}
            </div>
            <div className="OverlayComponents" style={{ width: `${width}%` }}>
                {OverlayComponents}
            </div>
        </div>
    )
}

export default ContentWrapper