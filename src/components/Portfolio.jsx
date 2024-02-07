import React, { useState } from 'react';
import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png';
import proj4 from '../images/proj4.png';
import proj5 from '../images/proj5.png';
import ecom from  '../images/ecom.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecom,
      imageStyle:{height:'75%'},
      codeLink: 'https://github.com/zubairalam1997/reactjs-contact-app/tree/main/src',
      demo: 'https://fullstackecomm.web.app'
      
    },
    {
      id: 2,
      src: proj2,
      codeLink: 'https://github.com/zubairalam1997/weatherApplication/tree/master',
      demo: 'https://weather-app-56x.pages.dev/',
    },
    {
      id: 3,
      src: proj5,
      codeLink: 'https://github.com/zubairalam1997/reactjs-contact-app/tree/main/src',
      imageStyle:{height:'75%'},
      demo: 'https://resume-creater.pages.dev/',
     
    },
    {
      id: 4,
      src: proj4,
      codeLink: 'https://github.com/zubairalam1997/reactjs-contact-app/tree/main/src',
      imageStyle:{height:'75%'},
      demo: '',
    },
    {
      id: 5,
      src: proj3,
      codeLink: 'https://github.com/zubairalam1997/real-estate-ui/tree/master',
      demo: 'https://data-security-app.pages.dev/',
      
    },
    {
      id: 6,
      src: proj1,
      codeLink: 'https://github.com/zubairalam1997/real-estate-ui/tree/master',
      demo: 'https://real-estate-app.pages.dev/',
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentDemoLink, setCurrentDemoLink] = useState('');

  const openDemoLink = (demo) => {
    setCurrentDemoLink(demo);
    setModalOpen(true);
  };

  const closeDemoModal = () => {
    setCurrentDemoLink('');
    setModalOpen(false);
  };

  return (
    <div
      name="portfolio"
      className="box-content py-12 bg-gradient-to-b from-black to-gray-800 max-w-full text-white md:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, demo, imageStyle }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {demo ? (
                <button
                  onClick={() => openDemoLink(demo)}
                  className="rounded-md duration-200 hover:scale-105"
                  style={imageStyle}
                >
                  <img src={src} alt="" className="w-full h-full rounded-md" />
                </button>
              ) : (
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  style={imageStyle}
                />
              )}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openDemoLink(demo)}
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  disabled={!demo}
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(codeLink)}
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
  <div
    className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center"
    onClick={closeDemoModal}
  >
    <div
      className="relative w-11/12 h-4/5 max-w-screen-md max-h-screen-md md:w-1/2 md:h-3/4 bg-white border-4 border-gray-500 rounded-xl border-solid"
      onClick={(e) => e.stopPropagation()} // Prevents the modal from closing when clicking inside it
    >
      <button
        className="absolute top-0 right-5 font-bold text-red-500 text-xl"
        onClick={closeDemoModal}
      >
        Close
      </button>
      <iframe
        src={currentDemoLink}
        title="Website Demo"
        className="w-full h-full rounded-xl"
        style={{ border: 'none' }}
      />
    </div>
  </div>
)}

    </div>
  );
};

export default Portfolio;
