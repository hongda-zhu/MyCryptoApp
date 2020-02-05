import React from 'react'
import { AppContext } from '../../AppProvider'
import {SelectableTile, DisabledTile, DeletableTile} from '../../Shared/Tile'
import CoinItemGrid from '../CoinItemGrid'
import CoinImage from '../../Shared/CoinImage'

// add/remove coin 

function clickCpoinHandler (topSection, coinKey, addCoin, removeCoin){
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

export default function({topSection, coinKey}) {
    
    return <AppContext.Consumer>
        {({coinList, addCoin, removeCoin, isInFavorites}) => {

            let coin = coinList[coinKey];

            let TileClass = SelectableTile 

            if(topSection) {
                TileClass = DeletableTile;
            } else if(isInFavorites(coinKey)){
                TileClass = DisabledTile // if it is include then it will be disable
            }

            return <TileClass
            onClick = {clickCpoinHandler(topSection, coinKey, addCoin, removeCoin)}>
                <CoinItemGrid name={coin.CoinName} symbol={coin.Symbol} topSection ={topSection} />
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
} 