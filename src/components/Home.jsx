import React from "react";
import dp from "../images/dp.jpg";
import { BsBoxArrowRight } from "react-icons/bs";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="flex sm:mt-0 pt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Fresher and I have a insane love for building and desgining software.
            Currently, I like to work on web application using technologies like
            React.js,Firebase , Node.js, Tailwind CSS, MongoDB e.t.c.
          </p>

          <div >
          <Link to="portfolio"
                smooth
                duration={500}
                className="group  text-white w-fit px-6 py-3 mt-2 flex items-center 
                rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-108 cursor-pointer"
                >
                 
            Portfolio
            <span className="hover:scale-108 hover:translate-x-2 duration-300 ml-1">
              <BsBoxArrowRight size={25} className="ml-1" />
            </span>
            </Link>
          </div>
        </div>

        <div className="ml-8">
          <img
            src={dp}
            alt="my profile"
            className="border-1 border-blue-500 rounded-full shadow-lg shadow-blue-500  md:mx-auto w-2/5 lg:w-2/3   "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
