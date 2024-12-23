import React from "react";
import Navbar from "./components/navbar";
import Principal from "./components/Principal";
import ImagemModelo from "./components/imagem";
import About from "./components/About";
import Content from "./components/content";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Principal bg="#4C585B">
        <ImagemModelo src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
        <About/>
      </Principal>
      <Principal bg="#A5BFCC">
        <Projects negocinho={true}/>
        <Projects>
          <Content src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
          <Content src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
        </Projects>
        <Projects>
          <Content src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
          <Content src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
        </Projects>
      </Principal>
      <Principal bg="#F4EDD3">

      </Principal>
    </div>
  );
}