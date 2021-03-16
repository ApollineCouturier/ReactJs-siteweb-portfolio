import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Competences from "./components/Competences";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About />
      <Competences />
      <Contact />
    </div>
  );
}

export default App;
