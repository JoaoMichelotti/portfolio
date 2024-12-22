import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
`

const Imagem = styled.img`
    width: 300px;
    border-radius: 50%;
`

export default function ImagemModelo(props) {
    return (
        <Modelo>
            <Imagem src={props.src} alt={props.alt} />
        </Modelo>
    );
}