import React from 'react';
import {AppContext} from '../../AppProvider'
import styled from 'styled-components'
import PriceTile from '../PriceTile'

const PriceGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

export default function() {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGridStyle>
                    {prices.map((price, index) => (<PriceTile key={Object.keys(price)[0]} price={price} index={index}></PriceTile>))}
                </PriceGridStyle>
            )}
        </AppContext.Consumer>
    )
}