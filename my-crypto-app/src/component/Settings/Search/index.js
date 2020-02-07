import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from '../../Shared/Style'
import {AppContext} from '../../AppProvider'
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchGrid = styled.div`
    display:grid;
    grid-template-columns: 200px 1fr
`

const SearchInput = styled.input`

    ${backgroundColor2};
    ${fontSize2};
    border: 1px solid;
    height:25px
    color: #1163c9
    place-self: center left

`
// debounce function

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {

    // Get all the coin symbols

    let coinSymbols = Object.keys(coinList);

    // Get all the coin names, map symbol to name

    let CoinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringToSearch = coinSymbols.concat(CoinNames)

    let fuzzyResults = fuzzy
        .filter(inputValue, allStringToSearch, {})
        .map(result => result.string)

    // pickby 

    let filteredCoins = _.pickBy(coinList, (result, symKey)=> {
        let coinName = result.CoinName;
        return(_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    })
    setFilteredCoins(filteredCoins)
    
}, 500)



function filterCoins(e, setFilteredCoins, coinList){
    
    let inputValue = e.target.value 
    handleFilter(inputValue, coinList, setFilteredCoins)
    
}


export default function() {
    return (
        <AppContext.Consumer>

            {({ setFilteredCoins, coinList }) =>

                <SearchGrid>
                    <h2>Search</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
                </SearchGrid>

            }

        </AppContext.Consumer>

    ) 
}