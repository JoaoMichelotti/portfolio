import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const ImagemModelo = styled.div`
    width: 300px;
    border-radius: 20px;
    padding: 20px;
`

const infoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export default function Content(props) {
    return (
        <Modelo>
            <ImagemModelo>
                <img src={props.src} alt={props.alt} />
            </ImagemModelo>

            <infoDiv>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi totam, perferendis optio id blanditiis non. Corrupti quasi ipsam, dicta earum sint repudiandae ea beatae mollitia cupiditate obcaecati porro dolores quod.</p>
            </infoDiv>
        </Modelo>
    );
}      