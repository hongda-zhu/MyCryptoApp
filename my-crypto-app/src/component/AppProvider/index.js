import React from 'react';

const cc = require('cryptocompare')

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            page:'dashboard',
            setPage: this.setPage,
            ...this.savedSettings(), // spread the result of that over the rest of these previous properties here
            confirmFavorites: this.confirmFavorites
        }
        
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList})
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard',
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello',
            
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return{page:'settings', firstVisit: true}
        }
        return{};
    }

    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children} 
            </AppContext.Provider>
        )
    }
}