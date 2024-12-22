import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    align-items: center;
    margin: 0 auto;
    background-color: #333;  
    padding: 30px; 
`

export default function Principal(props) {
  return (
    <Modelo>
        {props.children}
    </Modelo>
  );
}