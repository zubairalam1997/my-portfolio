import React from "react";
import dp from "../images/dp.jpg";
import { BsBoxArrowRight } from "react-icons/bs";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Fresher and I have a insane love for building and desgining software.
            Currently, I like to work on web application using technologies like
            React.js, Tailwind, mongo db e.t.c.
          </p>

          <div >
          <Link to="portfolio"
                smooth
                duration={500}
                className="group  text-white w-fit px-6 py-3 my-2 flex items-center 
                rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-108 cursor-pointer"
                >
                 
            Portfolio
            <span className="hover:scale-108 hover:translate-x-2 duration-300 ml-1">
              <BsBoxArrowRight size={25} className="ml-1" />
            </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={dp}
            alt="my profile"
            className="border-1 border-gray-600  rounded-2xl mx-auto w-1/3 md:w-1/3 pl-4  ml-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
