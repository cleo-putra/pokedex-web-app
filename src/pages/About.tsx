import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/myphoto.jpeg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hola, I am Cleoputra Goldi</h1>
      <h2 className="profile-text">Software Engineer | Frontend Engineer</h2>
      <h4 className="profile-text">
        This project is created for Technical Test for Sera company Indonesia
      </h4>
      <div className="profile-links">
        <a href="https://github.com/cleo-putra">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/cleo-putra-10655614b/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);