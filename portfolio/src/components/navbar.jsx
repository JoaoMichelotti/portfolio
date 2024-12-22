import React from "react";
import styled from "styled-components";

const Modelo = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;  
  padding: 20px; 
  `

const Item = styled.li`
    list-style: none;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
    }

    a:hover {
        color: #f00;
    }
`


export default function Navbar() {
  return (
    <nav style={{position: "fixed", width: "100%", zIndex: 1}}> 
        <Modelo>
            <Item>
            <a href="#about">About</a>
            </Item>
            <Item>
            <a href="#projects">Projects</a>
            </Item>
            <Item>
            <a href="#contact">Contact</a>
            </Item>
        </Modelo>
    </nav>
  );
}