import "./App.css";
import Home from "./Componants/Home";
import Navbar from "./Componants/Navbar";
import Skills from "./Componants/Skills";
import Project from "./Componants/Project";
import Contact from "./Componants/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
