import React from 'react';
import _ from 'lodash'

export const AppContext = React.createContext()
const cc = require('cryptocompare')

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            page:'dashboard',
            setPage: this.setPage,
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(), // spread the result of that over the rest of these previous properties here
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins,
            setCurrentFavorites: this.setCurrentFavorites
        }
        
    }

    // fetch coins - `prices

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data; // key one
        this.setState({coinList})
    }

    fetchPrices = async () => {
        if(this.state.firstVisi) return;
        let prices = await this.prices();
        console.log(prices)
        this.setState({prices})

    }

    prices = async() => {
        let returnData = []
        for (let i =0; i < this.state.favorites.length; i++){
            try {
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
                returnData.push(priceData)
            } catch (e){
                console.warn('Fetch price error: ', e)
            }
        }

        return returnData
    }

    // switch pages => using firstVisit props

    confirmFavorites = () => {
        let currentFavorites = this.state.favorites[0]

        this.setState({
            firstVisit: false,
            page: 'dashboard',
            currentFavorites, 
        }, () => {
            this.fetchPrices()
        })  
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorites
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return{page:'settings', firstVisit: true}
        }
        let {favorites, currentFavorites} = cryptoDashData; // save favorites in localstorage, if there has no item get the default one
        return{favorites, currentFavorites};
    }

    setCurrentFavorites = (sym) => {
        debugger
        this.setState({
            currentFavorites: sym
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoDash')),
            currentFavorites: sym
        }))
    }

    setPage = page => this.setState({page})

    // add && remove && check is in favorites 

    addCoin = key => {
        let favorites = [...this.state.favorites]; // grab all favorites => spread operator makes copy of the array

        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites}); // condition if favorites array is lower than 10
        }
    }
    
    removeCoin = key => {
        let favorites = [...this.state.favorites]; 

        this.setState({favorites: _.pull(favorites, key)}) //
    }

    isInFavorites = key =>  _.includes(this.state.favorites, key)

    // Search

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins})



    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children} 
            </AppContext.Provider>
        )
    }
}