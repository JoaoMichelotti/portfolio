import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    width: 400px;
`

const Titulo = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 20px;
`

const Paragrafo = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
`

export default function About() {
    return (
        <Modelo>
            <Titulo>About</Titulo>
            <Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque nec nisl nec nisl ultricies ultricies.
            </Paragrafo>
        </Modelo>
    )

}