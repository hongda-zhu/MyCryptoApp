import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display:grid
    grid-template-columns: 180px 1fr 100px
`

export default function(){
    return <Bar> 

        <div> child 1 </div>
        <div> child 2 </div>
        <div> child 3 </div>
        
    </Bar>
}