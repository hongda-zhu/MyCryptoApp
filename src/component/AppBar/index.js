import React from 'react';
import styled, { css } from 'styled-components';
import {AppContext} from '../AppProvider'

const Logo = styled.div`
    font-size: 1.5em
`

const Bar = styled.div`
    display:grid;
    margin-bottom: 1rem;
    grid-template-columns: 1.8fr 2fr 1fr 1fr;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px red;
    `}
    ${props => props.hidden && css`
        display: none
    `}

`
function ControlButton({name}){
    return (
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControlButtonElem 
                    active={page === name}
                    onClick={()=> setPage(name)}
                    hidden={firstVisit && name ==='dashboard'}
                > 
                    {toProperCase(name)}
                </ControlButtonElem>)
            }
        </AppContext.Consumer>
    )
}

// function ControlButton({name, active}) {
//     return (
//         <ControlButtonElem active={active}>{name}</ControlButtonElem>
//     )
// }

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1)
}

export default function(){
    return <Bar> 

        <Logo> MyCryptoApp </Logo>
        <div/>
        <ControlButton name="dashboard" active></ControlButton>
        <ControlButton name="settings" active></ControlButton>
        
    </Bar>
}