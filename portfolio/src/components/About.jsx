import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    width: 500px;
`

const Titulo = styled.h1`
    text-align: center;
    font-size: 2.3rem;
    color: #fff;
    margin-bottom: 20px;
`

const Paragrafo = styled.p`
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
`

export default function About() {
    return (
        <Modelo>
            <Titulo>Sobre</Titulo>
            <Paragrafo>
            Olá, meu nome é João Vitor.
            Sou professor de tecnologia e tenho experiência em 
            desenvolvimento Web, Desktop e Mobile,
            utilizando as linguagens Python, JavaScript, Java, C++, 
            C# e PHP. Além disso, possuo conhecimento em React e React Native.
            </Paragrafo>
        </Modelo>
    )

}