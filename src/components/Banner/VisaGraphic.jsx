import React, { useEffect, useState } from 'react';
import './VisaGraphic.css'; // Or import your CSS file if you created one externally

import { useResponsive } from '../Layout/ResponsiveProvider';

const VisaGraphic = () => {
    // Define image URLs as const variables
    const planeImageUrl = "/Airplane.png";
    const cloudImageUrl = "/Cloud.png";
    const ticket1ImageUrl = "Ticket.png";
    const flightPathImageUrl = "/Flight.png";
    const { isMobile, globalWidth } = useResponsive()
    const [scale, setScale] = useState(1)
    useEffect(()=>{
        // setScale(globalWidth / 1200)
    }, [globalWidth])
    return (
        <>


            <div className={"visa-graphic-container " + (isMobile || globalWidth < 1200 ? "mobile" : "")} style={{scale:scale}}>
                <div className={"planeContainer " + (isMobile || globalWidth < 1200 ? 'mobile' : '')}>
                    <img
                        src={planeImageUrl}
                        alt="Plane"
                        className="plane-image"
                    />

                    <img
                        src={cloudImageUrl}
                        alt="Cloud"
                        className="cloud-image"
                    />
                </div>
                <div className="visa-to-text">
                    VISA TO
                </div>

                <div className="vietnam-text-container">
                    <div className="vietnam-text">
                        <span className="vietnam-text-front">VIETNAM</span>
                        <span className="vietnam-text-back">VIETNAM</span>
                    </div>
                    <img
                        src={flightPathImageUrl}
                        alt="Flight Path"
                        className="flight-path-image"
                    />
                </div>

                <div className="qnt-box">
                    <div className="qnt-text">
                        <span className="qnt-text-front">QnT</span>
                        <span className="qnt-text-back">QnT</span>
                    </div>
                    <img
                        src={ticket1ImageUrl}
                        alt="Ticket 1"
                        className="ticket-image ticket-image-1"
                    />
                </div>



            </div>
        </>

    );
};

export default VisaGraphic;