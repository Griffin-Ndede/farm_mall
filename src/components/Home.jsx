import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {
  const [, setPlantingDate] = useState("");
  const [calculatedDate, setCalculatedDate] = useState("");
  const [, setAcres] = useState(0);
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
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-4xl mb-10 text-custom-green">
              Smart Farming Management System
            </h1>
            <p className="text-xl max-w-xl mx-auto mb-10">
              Optimize your farm&apos;s productivity with our comprehensive management solution.
              Track inputs, monitor schedules, and maximize your harvest potential.
            </p>
            <a
              href="/login"
              className="inline-block bg-custom-green text-white px-6 py-2 rounded-3xl text-lg"
            >
              Get Started
            </a>
          </div>

          {/* Feature Cards Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 shadow-2xl rounded-3xl">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-custom-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Input Scheduling</h3>
              <p className="text-gray-600 text-center">
                Track and plan your farm inputs with an intelligent calendar system.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 shadow-2xl rounded-3xl">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-custom-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Crop Management</h3>
              <p className="text-gray-600 text-center">
                Monitor crop cycles from planting to harvest with precise timing.
              </p>
            </div>

            <div className="flex flex-col items-center  p-6 shadow-2xl rounded-3xl">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-custom-green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18v18H3V3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Analytics</h3>
              <p className="text-gray-600 text-center">
                Analyze farm performance and optimize your agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <section className="relative pt-16 h-full md:h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:w-6/12 lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-custom-green">
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
                  <h4 className="text-sm md:text-lg font-bold text-white">
                    By harnessing the power of AI and machine learning, Farm Mall will analyze vast datasets to:
                  </h4>
                  <ul className="list-disc pl-4 text-xs md:text-sm font-light mt-2">
                    <li>Forecast crop yields and identify potential risks.</li>
                    <li>Optimize planting schedules based on market demand and weather patterns.</li>
                    <li>Provide farmers with personalized recommendations tailored to their specific needs.</li>
                    <li>Offer a secure and trusted platform with robust data protection protocols.</li>
                  </ul>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <h1
                id="calculator"
                className="text-2xl md:text-4xl font-bold text-custom-green mb-6 text-center"
              >
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
                      <span className="text-custom-green">{calculatedDate}</span>
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
                    className="block w-2/3 rounded-xl py-2 px-4 shadow-xl"
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
