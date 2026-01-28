import React , { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { initScrollAnimations } from "./scrollAnimations";



const App = () => {
  useEffect(() => {
  initScrollAnimations();
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <Hero/>
    </>
  );
};

export default App;
