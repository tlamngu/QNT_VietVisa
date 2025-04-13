import React from 'react'

import "./BannerBackground.css"

import ContentWrapper from '../Layout/ContentWrapper'

import { useResponsive } from '../Layout/ResponsiveProvider'

import GridLayout from '../Layout/GridLayout'

import VisaGraphic from './VisaGraphic'


function BannerBackground() {
    return (
        <>
            <div className='BannerBg'>
                <div className="BackgroundOverlay">
                </div>
                <div className="BackgroundImg">
                    <img src="/BannerBG.png" alt="" />
                    {/* <img src="" alt="" /> */}
                </div>
            </div>
            <img src="/Curve.svg" alt="" className='CurveBanner' />

        </>

    )
}

export default BannerBackground