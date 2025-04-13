import React from 'react'

import "./Layout.css"

import { useResponsive } from './ResponsiveProvider'

function GridLayout({ Left, Right, style={}, children=null}) {
    const {isMobile, globalWidth} = useResponsive()
    return (
        <div className={'GridLayout ' + (isMobile?"mobile":"")} style={style}>
            {children != null ? (
                children
            ) : (
                <>
                    <div className="GridItem">
                        {Left}
                    </div>
                    <div className="GridItem">
                        {Right}
                    </div>
                </>
            )
            }

        </div >
    )
}

export default GridLayout