import React from "react";

function Home() {
  return (
    <>
      <section>
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
                <h1 className="text-3xl md:text-5xl p-2 text-custom-orange tracking-loose">
                    TechFest
                </h1>
                <p className="leading-relaxed md:leading-snug mb-2">
                        Space : The Timeless Infinity
                </p>
              <p className="text-sm md:text-base text-black mb-4">
                Explore your favourite events and register now to showcase your talent and win exciting prizes.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-custom-orange text-black hover:text-white rounded-3xl shadow hover:shadow-lg py-1 px-2 border border-custom-orange hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxhMTmFKGMmP5UdPzvKGoVqz_aKYpNBoZLA&s" alt="farmer"></img>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Home;
