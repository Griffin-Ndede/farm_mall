/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <Navbar/>
      <section className="h-screen">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-custom-orange tracking-loose">
                   Lorem ipsum dolor
                </h1>
              <p className="text-sm md:text-base text-black mb-4 pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et nostrum autem magnam cumque soluta unde corrupti obcaecati fuga. 
                Quod molestiae obcaecati veritatis? Corporis nostrum nihil quibusdam delectus vero culpa similique?
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
                className="h-96 object-cover rounded-3xl"></img>
              </div>
            </div>
          </div>
      </section>
      <section className="h-screen">
        <h1>This is another section</h1>
      </section>
    </>
  );
}

export default Home;
