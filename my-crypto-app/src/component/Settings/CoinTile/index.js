import React from 'react'
import { AppContext } from '../../AppProvider'
import {SelectableTile} from '../../Shared/Tile'
import CoinItemGrid from '../CoinItemGrid'
import CoinImage from '../../Shared/CoinImage'

export default function({coinKey}) {
    
    return <AppContext.Consumer>
        {({coinList}) => {
            let coin = coinList[coinKey];
            const TileClass = SelectableTile 
            return <TileClass>
                <CoinItemGrid name={coin.CoinName} symbol={coin.Symbol} />
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
} 