import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display:grid;
    grid-template-columns: 1.8fr 2fr 1fr 1fr;
`

export default function(){
    return <Bar> 

        <div> child 1 </div>
        <div/>
        <div> child 2 </div>
        <div> child 3 </div>
        
    </Bar>
}