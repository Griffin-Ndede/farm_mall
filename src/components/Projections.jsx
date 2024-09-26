import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Projections({ setActiveComponent }) {
  const [crops, setCrops] = useState([]);
  const URL = 'http://127.0.0.1:8000/potato/';
  
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get(URL);
        setCrops(response.data);
      } catch (error) {
        console.error("Error fetching crops:", error);
        Swal.fire({
          title: 'Error',
          text: "Failed to fetch crop data",
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    };

    fetchCrops();
  }, []);

  const calculateProjections = (activity, date) => {
    const dateObj = new Date(date);
    let projectionDates = [];

    switch (activity) {
      case "Weeding":
        projectionDates.push(new Date(dateObj.getTime() + 7 * 24 * 60 * 60 * 1000)); // Example: Weed after 7 days
        break;
      case "Applying fertilizer":
        projectionDates.push(new Date(dateObj.getTime() + 14 * 24 * 60 * 60 * 1000)); // Example: Fertilize after 14 days
        break;
      case "Harvesting":
        projectionDates.push(new Date(dateObj.getTime() + 90 * 24 * 60 * 60 * 1000)); // Example: Harvest after 90 days
        break;
      // Add more cases as necessary
      default:
        break;
    }

    return projectionDates.map(date => date.toLocaleDateString()).join(', ');
  };

  return (
    <>
      <div id="projections" className="">
        <h1 className="font-bold text-black">Crop Projections</h1>
        <div id="stats" className="grid grid-cols-1 gap-4">
          {crops.map((crop) => (
            <div key={crop.id} className="bg-custom-green rounded-lg p-4">
              <h2 className="text-lg font-bold">Activity: {crop.activity}</h2>
              <p className="text-white">Date: {new Date(crop.date).toLocaleDateString()}</p>
              <p className="text-white">County: {crop.county}</p>
              <p className="text-white">Projected Dates: {calculateProjections(crop.activity, crop.date)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projections;
