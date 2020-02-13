import React from 'react'
import {Tile} from '../../Shared/Tile'
import {AppContext} from '../../AppProvider'
import CoinImage from '../../Shared/CoinImage'
import styled from 'styled-components'

const SpotlightName= styled.h2`
    text-align: center;
`

export default function(){
    return(
        <AppContext.Consumer>
            {({currentFavorites, coinList}) => 
                <Tile>
                    <SpotlightName>{coinList[currentFavorites].CoinName}</SpotlightName>
                    <CoinImage coin={coinList[currentFavorites]} spotlight/>
                </Tile>
            }

        </AppContext.Consumer>
    ) 

}