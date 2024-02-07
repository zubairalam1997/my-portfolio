import React from 'react'
import reactic from '../images/reactic.png'
import nodeic from '../images/nodeic.png'
import tailwindic from '../images/tailwindic.png'
import javascriptic from '../images/javascriptic.png'
import githubic from '../images/githubic.png'
import cpplus from '../images/cpplus.png'
import mongo from '../images/mongo.png'
import Firebaseicon from '../images/Firebaseicon.png'
import pyLogo from '../images/pyLogo.jpg'

const SkillStack = () => {
  
    const techs = [
        {
          id: 1,
          src: reactic,
          title: "React",
          style: "shadow-blue-600",
         
        },
        {
          id: 2,
          src: javascriptic,
          title: "JavaScript",
          style: "shadow-yellow-500",
          
        },
        {
          id: 3,
          src: nodeic,
          title: "Node.js",
          style: "shadow-green-400",
        },
        {
          id: 4,
          src: Firebaseicon,
          title: "Firebase",
          style: "shadow-yellow-500",
        },
        {
          id: 5,
          src: tailwindic,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: githubic,
          title: "Git-hub",
          style: "shadow-white",
        },
        {
          id: 7,
          src: mongo,
          title: "mongo DB",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: pyLogo,
          title: "PYTHON",
          style: "shadow-orange-500",
          
        },
        {
            id: 9,
            src: cpplus,
            title: "cpp",
            style: "shadow-purple-400",
          },
      ];
    
      return (
        <div
          name="SkillStack"
          className="box-content pt-14 bg-gradient-to-b from-gray-800 to-black max-w-full md:h-screen p-4"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Skill Stack
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div> 
  )
}

export default SkillStack
