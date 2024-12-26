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
        <ImagemModelo src="/eu.jpg" alt="Imagem de joao"/>
        <About/>
      </Principal>
      <Principal bg="#A5BFCC">
        <Projects negocinho={true}/>
        <Projects>
          <Content src="/MarcadorSG.PNG" alt="Imagem de exemplo" info="MarcadorSG - é um software
           onde você consegue controlar suas marcações
           de entrada e saída de uma empresa."/>
          <Content src="/ToniMotosLandingPage.PNG" alt="Imagem de exemplo" info="Landing Page - Uma pagina de apresentação 
          para a empres Toni Motos FW."/>
        </Projects>
        <Projects>
          <Content src="/EsportsLearner.jpg" alt="Imagem de exemplo" info="Esports Learner - Um projeto
          em PHP sobre um sistema para aprendizado em esports."/>

          <Content src="/Vitrine.PNG" alt="Imagem de exemplo" info="Catálogo - Um site para
          expor produtos de uma loja."/>
        </Projects>
      </Principal>
      <Principal bg="#F4EDD3">
          <h1 style={{marginBottom: "50px"}}>Contato</h1>

          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
             <h2>João Vitor Bulegon Michelotti - jvbulegon@gmail.com - 55 996572875</h2>
          </div>
         

      </Principal>
    </div>
  );
}