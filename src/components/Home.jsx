import React from "react";
import { FaSitemap, FaDraftingCompass, FaNewspaper, FaFileAlt } from 'react-icons/fa';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar/>
      <section className="h-screen bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center pt-24">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-custom-orange tracking-loose">
              Lorem ipsum dolor
            </h1>
            <p className="text-sm md:text-base text-black mb-4 pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              nostrum autem magnam cumque soluta unde corrupti obcaecati fuga.
              Quod molestiae obcaecati veritatis? Corporis nostrum nihil
              quibusdam delectus vero culpa similique?
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-custom-orange text-black hover:text-white rounded-3xl shadow hover:shadow-lg py-1 px-2 border border-custom-orange hover:border-transparent"
            >
              Lorem, ipsum.
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="flex flex-wrap content-center">
              <img
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/23-03-2022_WHO_Kenya-3.jpg/image1170x530cropped.jpg"
                alt="farmer"
                className="h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-16 bg-gray-500">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center mx-auto">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-24">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-custom-orange">
                <img
                  alt="farmer"
                  src="https://oneacrefund.org/sites/default/files/styles/short_banner_desktop/public/2022-10/ARK-OAF-Serabo-106.jpg?h=748d7e9c&itok=MS_QVqIn"
                  className="w-full object-cover h-64 align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-[95px] -top-[94px]"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-custom-orange fill-current"
                    />
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-sm font-light mt-2 text-white">explicabo omnis consequuntur fugiat voluptas labore accusantium, totam, nemo, aperiam natus facere in saepe repellat laborum. Qui, ducimus possimus.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <FaSitemap />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Lorem ipsum dolor sit amet.</h6>
                      <p className="mb-4 text-xs text-black">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Ipsa, fuga modi. Vero amet ut totam quis cupiditate nulla, provident facilis?
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <FaDraftingCompass />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Lorem ipsum dolor sit amet.</h6>
                      <p className="mb-4 text-xs text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptate, eveniet assumenda soluta ipsum deleniti inventore ipsam eaque neque vero nam!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <FaNewspaper />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Lorem ipsum dolor sit amet.</h6>
                      <p className="mb-4 text-xs text-black">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Officia modi molestias, eius ut consequuntur vel soluta! 
                        Molestiae unde architecto libero commodi nesciunt impedit itaque, 
                        saepe porro doloremque at. Perspiciatis, tempora.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <FaFileAlt />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Lorem ipsum dolor sit amet.</h6>
                      <p className="mb-4 text-xs text-black">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          Numquam minima aperiam delectus, quis debitis quia eaque vero 
                          voluptatibus amet, sint a expedita commodi laborum nam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
      

    </>
  );
}

export default Home;
