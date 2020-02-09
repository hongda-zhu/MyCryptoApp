import React from 'react';
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'

export default function(){

    return <Page name ="settings" >  
        <CoinGrid topSection/>
        <WelcomeMessage/> 
        <ConfirmButton/>
        <Search />
        <CoinGrid />
    </Page> 
}