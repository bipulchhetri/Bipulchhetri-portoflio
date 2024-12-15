import React from "react";
import { FaDownload } from "react-icons/fa";
import Pdf from "../assets/Bipul.pdf";
const About = () => {
  return (
    <div className="max-w-screen-lg text-white flex justify-between align-center p-8 about mx-auto">
      <div className="left w-1/2 about1">
        <h3 className="text-4xl font-bold border-b-4 border-green-500 pb-2 inline">
          About Me
        </h3>
        <p className="tracking-wider leading-6 pt-5	">
          Hello, my name is Bipul Chhetri, and I am from India. I hold a <span className="text-green-500">B.Tech
          degree in Computer Science</span> and Engineering. I have completed a 6-month
          SEO internship and am currently focused on advancing my skills in
          <span className=" text-green-500 " > full-stack web development</span>. <br></br>
          I am proficient in HTML, CSS, JavaScript,
          React.js, Bootstrap, and Tailwind CSS, and I am actively working on
          enhancing my knowledge of backend technologies like <span className="text-green-500" >Node.js, Express,
          and MongoDB</span> . I am excited to apply my skills and contribute as a
          full-stack developer, building modern, responsive, and efficient web
          applications.
        </p>
      </div>
      <div className="right w-1/1 about2 ">
        <h3 className="text-4xl font-bold border-b-4 border-green-500 p-2 inline">
          Contact Me
        </h3>
        <p className="pt-5">Email Me:bipulchhetri@gmail.com</p>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <button className="text-white w-auto px-10 py-2 mt-8 flex items-center bg-green-500 border-2 rounded-lg text-lg font-bold cursor-pointer border-black hover:bg-orange-500 scale-105 duration-500 animate-spin">
            Download Resume
            <FaDownload className="ml-5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
