import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Bipul from "../assets/Bipul photo.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full home">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={Bipul}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full z-10"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi, I'm Bipul
          </h2>
          <Typewriter
            options={{
              strings: ["A Full Stack Developer", "Programmer", "Engineer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <p className="text-white py-4 max-w-md">
            I am a passionate full-stack web developer with a strong focus on
            building modern and efficient web applications. I specialize in the
            MERN stack, working with technologies like MongoDB, Express.js,
            React, and Node.js. I also have experience with tools like Tailwind
            CSS for responsive design and RESTful APIs for backend development.
          </p>
          <div className="social flex gap-3 my-2 cursor-pointer">
            <div className="text-white text-3xl hover:scale-125 duration-500">
              <a href="https://www.facebook.com/1bipulchhetri/">
                <BsFacebook />
              </a>
            </div>
            <div className="text-white text-3xl hover:scale-125 duration-500">
              <a href="https://twitter.com/1bipulchhetri">
                <BsTwitter />
              </a>
            </div>
            <div className="text-white text-3xl hover:scale-125 duration-500">
              <a href="https://github.com/bipulchhetri">
                <AiFillGithub />
              </a>
            </div>
            <div className="text-white text-3xl hover:scale-125 duration-500">
              <a href="https://www.linkedin.com/in/bipul-chhetri/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-5 flex items-center bg-green-500 border-2 
              rounded-full p-4 shadow-lg text-2xl cursor-pointer hover:bg-orange-600 scale-105 duration-500 animate-pulse"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={Bipul}
            alt="profile"
            className="max-w-sm max:w-full  p-12 bp "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
