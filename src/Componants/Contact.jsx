import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contacts">
        <h1>CONTECT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/tarundhote_" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/tarun-dhote-405a2824b" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twiter.com" target="_blank" className="items">
            <CiTwitter className="icons" />
          </a>
          <a href="https://github.com/Tarundhote" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:tarundhote05@gmail.com"
            target="_blank"
            className="items"
          >
            <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
