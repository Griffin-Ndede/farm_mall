import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaCalendarCheck, FaChartLine } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";


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
      <section id="home" className="h-screen flex flex-col justify-center items-center">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-custom-green leading-tight">
      Welcome to Farm Mall
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
      Empowering farmers with smart tools to plan, monitor, and optimize their agricultural practices.
    </p>
    <div className="mt-8">
      <a
        href="#calculator"
        className="px-6 py-3 bg-custom-green text-white text-lg sm:text-xl font-medium rounded-full shadow-lg hover:bg-green-700 transition-all"
      >
        Try the Calculator
      </a>
    </div>
  </div>
  {/* Feature Cards */}
  <div className="mt-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {[
      {
        icon: <FaCalendarCheck className="text-4xl text-custom-green mb-4" />,
        title: "Input Scheduling",
        description: "Track and plan your farm inputs with an intelligent calendar system.",
      },
      {
        icon: <FaChartLine className="text-4xl text-custom-green mb-4" />,
        title: "Performance Analytics",
        description: "Analyze farm performance and optimize your agricultural practices.",
      },
      {
        icon: <FaListCheck className="text-4xl text-custom-green mb-4" />,
        title: "Crop Management",
        description: "Monitor crop cycles from planting to harvest with precise timing.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-6 shadow-2xl rounded-3xl bg-white h-full"
      >
        {feature.icon}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-center">{feature.description}</p>
      </div>
    ))}
  </div>
</section>

{/* Calculator Section */}
<section className="pt-16 h-full md:h-screen">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Information Card */}
      <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12 px-4">
        <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-custom-green">
          <img
            alt="farmer"
            src="https://oneacrefund.org/sites/default/files/styles/short_banner_desktop/public/2022-10/ARK-OAF-Serabo-106.jpg?h=748d7e9c&itok=MS_QVqIn"
            className="w-full object-cover h-48 sm:h-56 md:h-64 align-middle rounded-t-lg"
          />
          <blockquote className=" p-4 sm:p-6 md:p-8 rounded-b-xl bg-custom-green">
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
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-white">
              By harnessing the power of AI and machine learning, Farm Mall will analyze vast datasets to:
            </h4>
            <ul className="list-disc pl-4 text-xs sm:text-sm font-light mt-2 text-white">
              <li className="leading-6 sm:leading-7">Forecast crop yields and identify risks.</li>
              <li className="leading-6 sm:leading-7">Optimize planting schedules based on market and weather conditions.</li>
              <li className="leading-6 sm:leading-7">Provide personalized farming recommendations.</li>
              <li className="leading-6 sm:leading-7">Ensure secure data protection.</li>
            </ul>
          </blockquote>
        </div>
      </div>
      {/* Calculator Section */}
      <div className="w-full sm:w-10/12 md:w-6/12 px-4">
        <h1
          id="calculator"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-green mb-6 text-center"
        >
          Calculator
        </h1>
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="plantingdate"
              className="block text-base sm:text-lg font-semibold text-gray-700 mb-2"
            >
              Planting Date
            </label>
            <input
              type="date"
              name="plantingdate"
              id="plantingdate"
              className="block w-full sm:w-2/3 rounded-xl py-2 px-4 shadow-xl"
              onChange={handleDuration}
            />
          </div>
          {calculatedDate && (
            <div className="mt-4">
              <p className="text-sm sm:text-md font-semibold text-gray-700">
                Expected Harvest Date:{" "}
                <span className="text-custom-green">{calculatedDate}</span>
              </p>
            </div>
          )}
          <div>
            <label
              htmlFor="acres"
              className="block text-base sm:text-lg font-semibold text-gray-700 mb-2"
            >
              Number of Acres
            </label>
            <input
              type="number"
              name="acres"
              id="acres"
              className="block w-full sm:w-2/3 rounded-xl py-2 px-4 shadow-xl"
              onChange={handleCostCalculation}
            />
          </div>
          {estimatedCost > 0 && (
            <div className="mt-4">
              <p className="text-sm sm:text-md font-semibold text-gray-700">
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
</section>
<section className="h-full">
  <div className="w-full bg-gray-100 py-12 md:py-24">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-custom-green">
          What farmers are saying.
        </h1>
        <h3 className="text-lg sm:text-xl font-light mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="px-4">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-6 text-gray-800 font-light">
              <div className="flex items-center mb-4">
                <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${index + 1}`} alt="" />
                </div>
                <div className="flex-grow pl-4">
                  <h6 className="font-bold text-sm uppercase text-gray-600">User {index + 1}</h6>
                </div>
              </div>
              <p className="text-sm">
                <span className="text-xl leading-none italic font-bold text-custom-green mr-2">&quot;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas.
                <span className="text-xl leading-none italic font-bold text-custom-green">&quot;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="bg-gray-100 py-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 text-center mb-8">
      Partnerships
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
      {[...Array(6)].map((_, index) => (
        <img
          key={index}
          src="https://media.istockphoto.com/id/1142275340/vector/farm-simple-icon-farm-animal-sign-green-symbol-for-animal-husbandry.jpg?s=612x612&w=0&k=20&c=FI0a8aVYfS0vxkDE06FQK-HlHSbyBXGQy3vNfPfveOg="
          alt={`Partner ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      ))}
    </div>
  </div>
</div>
</section>
<Footer />

    </>
  );
}

export default Home;
