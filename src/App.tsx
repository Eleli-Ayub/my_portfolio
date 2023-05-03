import React from "react";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Landingpage from "./Pages/Landingpage";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className=" bg-indigo-950">
      <Landingpage />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
