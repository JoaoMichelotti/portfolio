import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    align-items: center;
    margin: 0 auto; 
    padding: 30px; 
`

export default function Principal(props) {
  return (
    <div style={{backgroundColor: "#333"}}>
      <Modelo>
          {props.children}
      </Modelo>
    </div>
  );
}