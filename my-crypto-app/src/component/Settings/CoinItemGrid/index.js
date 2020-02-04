import React from 'react'
import styled from 'styled-components'
import { CoinGridStyled } from '../CoinGrid'

export const CoinItemGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr
`

export const CoinSymbol = styled.div`
    justify-self: right;
`

export default function({name, symbol}) {
    return<CoinItemGridStyled>
        <div>{name}</div>
    <CoinSymbol>{symbol}</CoinSymbol>
    </CoinItemGridStyled>
}