import React from 'react'
import {AppContext} from "../AppProvider"

export default function ({name, children}) {
    return <AppContext.Consumer>
        {({page}) => { // name => dashboard, settings ...
            if (page !== name){
                return null
            }
        return <div>{children}</div> // nested components
        }}
    </AppContext.Consumer>
}