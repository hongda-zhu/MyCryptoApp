import hightchartsConfig from '../HighChartsConfig' // invoke 
import React from 'react';
import {Tile} from '../../Shared/Tile';
import {AppContext} from '../../AppProvider';
import ReactHighcharts from 'react-highcharts'; // configuration of theme 
import HighChartsTheme from '../HighChartsTheme'; 
ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

export default function(){
    return < AppContext.Consumer>
        {({}) => 
                <Tile>
                    <ReactHighcharts config={hightchartsConfig()}/>
                </Tile>
        }
    </AppContext.Consumer>
}