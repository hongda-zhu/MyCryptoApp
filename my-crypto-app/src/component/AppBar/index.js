import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
    font-size: 1.5em
`

const Bar = styled.div`
    display:grid;
    grid-template-columns: 1.8fr 2fr 1fr 1fr;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css `
        text-shadow: 0px 0px 60px #03ff03;
        margin-left: 1rem
    `}
`
function ControButton({name, active}){
    return (
        <ControlButtonElem active={active}> 
            {name}
        </ControlButtonElem>
    )
}

export default function(){
    return <Bar> 

        <Logo> MyCryptoApp </Logo>
        <div/>
        <ControButton name="Dashboard" active></ControButton>
        <ControButton name="Settings" active></ControButton>
        
    </Bar>
}