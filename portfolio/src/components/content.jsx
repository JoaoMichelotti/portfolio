import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 500px;

`

const ImagemModelo = styled.div`
    width: 400px;
    border-radius: 20px;
    padding: 20px;
`

const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 20px;
`

export default function Content(props) {
    return (
        <Modelo>
            <ImagemModelo>
                <img src={props.src} alt={props.alt} style={{width: "200px", height: "130px", borderRadius: "10px"}}/>
            </ImagemModelo>

            <InfoDiv>
                {props.info}
            </InfoDiv>
        </Modelo>
    );
}      