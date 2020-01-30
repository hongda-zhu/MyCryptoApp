import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    text-align: center;
    margin: 3rem 0;
    font-size: 2.5rem;
`


export default function Welcome() {
    return <Title>Welcome to MyCryptoApp</Title>
}