import React from 'react'
import { AppContext } from '../../AppProvider'


export default function () {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
            firstVisit ? <div>
                Welcome to MyCriptoDApp, please select your favorite coins to begin. {' '} {firstVisit}
            </div>: <div>no info</div>} 
        </AppContext.Consumer>
    )
}