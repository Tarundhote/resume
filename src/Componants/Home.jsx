import React, { useEffect, useRef } from "react";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRaf = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRaf.current, {
      strings: [
        "Welcome to my Profile",
        "My name is Tarun Dhote",
        "I am Mern Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRaf}></h1>

        <a
          href="/resume.pdf"
          download="Tarun_Dhote_Resume.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>

      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src="/assets/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
