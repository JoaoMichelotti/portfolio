import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 20px;
`

export default function Projects(props) {

   

    return (
        <Modelo>

            {props.negocinho && <Titulo>Projetos</Titulo>}

            {props.children}
        </Modelo>
    )
}