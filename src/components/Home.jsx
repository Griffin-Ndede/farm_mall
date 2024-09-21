import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {
  const [plantingDate, setPlantingDate] = useState("");
  const [calculatedDate, setCalculatedDate] = useState("");
  const [acres, setAcres] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);

  function handleDuration(event) {
    const selectedDate = new Date(event.target.value);
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 90); // Add 90 days
    setCalculatedDate(newDate.toDateString()); // Format to readable string
    setPlantingDate(event.target.value); // Store selected planting date
  }

  function handleCostCalculation(event) {
    const acresInput = event.target.value;
    setAcres(acresInput);
    const cost = acresInput * 70000;
    setEstimatedCost(cost);
  }

  return (
    <>
      <Navbar />
      <section className="h-screen bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center pt-16 md:pt-24 px-4 sm:px-8">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-custom-green tracking-loose">
              Lorem ipsum dolor
            </h1>
            <p className="text-sm md:text-base text-black mb-4 pt-4 md:pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              nostrum autem magnam cumque soluta unde corrupti obcaecati fuga.
              Quod molestiae obcaecati veritatis? Corporis nostrum nihil
              quibusdam delectus vero culpa similique?
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-custom-green text-black hover:text-white rounded-3xl shadow hover:shadow-lg py-1 px-2 border border-custom-green hover:border-transparent"
            >
              Lorem, ipsum.
            </a>
          </div>
          <div className="p-4 mt-12 md:mt-0 lg:w-1/2 justify-center">
            <img
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/23-03-2022_WHO_Kenya-3.jpg/image1170x530cropped.jpg"
              alt="farmer"
              className="h-64 md:h-96 object-cover rounded-3xl w-full"
            />
          </div>
        </div>
      </section>
      <section className="relative pt-16 h-full md:h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:w-6/12 lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl bg-custom-green">
                <img
                  alt="farmer"
                  src="https://oneacrefund.org/sites/default/files/styles/short_banner_desktop/public/2022-10/ARK-OAF-Serabo-106.jpg?h=748d7e9c&itok=MS_QVqIn"
                  className="w-full object-cover h-48 md:h-64 align-middle rounded-t-lg"
                />
                <blockquote className="relative p-4 md:p-8 rounded-b-xl bg-custom-green">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-[95px] -top-[94px]"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-custom-green fill-current"
                    />
                  </svg>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-xs md:text-sm font-light mt-2">
                    explicabo omnis consequuntur fugiat voluptas labore
                    accusantium, totam, nemo, aperiam natus facere in saepe
                    repellat laborum. Qui, ducimus possimus.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full   md:w-6/12 px-4">
              <h1 id="calculator"className="text-2xl md:text-4xl font-bold text-custom-green mb-6 text-center">
                Calculator
              </h1>
              <div className="flex flex-col space-y-6">
                <div>
                  <label
                    htmlFor="plantingdate"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Planting Date
                  </label>
                  <input
                    type="date"
                    name="plantingdate"
                    id="plantingdate"
                    className="block w-2/3 rounded-xl py-2 px-4 shadow-xl"
                    onChange={handleDuration}
                  />
                </div>
                {calculatedDate && (
                  <div className="mt-4">
                    <p className="text-md font-semibold text-gray-700">
                      Expected Harvest Date:{" "}
                      <span className="text-custom-green">
                        {calculatedDate}
                      </span>
                    </p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="acres"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Number of Acres
                  </label>
                  <input
                    type="number"
                    name="acres"
                    id="acres"
                    className="block w-2/3 rounded-xl  py-2 px-4  shadow-xl"
                    onChange={handleCostCalculation}
                  />
                </div>
                {estimatedCost > 0 && (
                  <div className="mt-4">
                    <p className="text-md font-semibold text-gray-700">
                      Estimated Planting Cost:{" "}
                      <span className="text-custom-green">
                        Ksh {estimatedCost.toLocaleString()}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;

