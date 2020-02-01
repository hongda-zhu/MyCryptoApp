import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../../AppProvider'

const Title = styled.div`
    text-align: center;
    margin: 3rem 0;
    font-size: 2.5rem;
`


export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVist}) =>
            firstVisit ? <div>
                Welcome to CryptoDash, please select your favorite coins to begin. {' '}
            </div>: null} 
        </AppContext.Consumer>
    )
}