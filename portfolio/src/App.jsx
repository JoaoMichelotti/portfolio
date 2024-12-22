import React from "react";
import Navbar from "./components/navbar";
import Principal from "./components/Principal";
import ImagemModelo from "./components/imagem";
import About from "./components/About";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Principal>
        <ImagemModelo src="https://via.placeholder.com/150" alt="Imagem de exemplo"/>
        <About/>
      </Principal>
    </div>
  );
}