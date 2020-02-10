import React from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from '../../Shared/Tile'
import {fontSize3, fontSizeBig} from '../../Shared/Style'
import {CoinItemGridStyled} from '../../Settings/CoinItemGrid'

const ChangePct = styled.div`
    color:green;
    ${props => props.red && css`
        color: red;
    `}
`

const JustifyRight = styled.div`
    justify-self: right;
`

const JustifyLeft = styled.div`
    justify-self: left;
`

const TickerPrice = styled.div`
    ${fontSizeBig}
`

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css `
        ${fontSize3};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        justify-items: right;
    `}
`

const numberFormat = number => {
    return (number + '').slice(0, 7)
}


// price color switch

function ChangePercent({data}){
    return(
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
        </JustifyRight>
    )
}

function PriceTile({sym, data}){
    
    return(
        <PriceTileStyled>
            <CoinItemGridStyled>
                <div>{sym}</div>
                <ChangePercent data={data}/>
            </CoinItemGridStyled>

            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>

        </PriceTileStyled>
    )
}

function PriceTileCompact({sym, data}){
    return (
        <PriceTileStyled compact>


            <JustifyLeft>{sym}</JustifyLeft>
            <ChangePercent data={data}/>


            <div>
                ${numberFormat(data.PRICE)}
            </div>

        </PriceTileStyled>
    )
}

export default function ({price, index}){

    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTile: PriceTileCompact

    return <TileClass sym = {sym} data = {data} ></TileClass>
}