import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Projections({ setActiveComponent }) {
  const [crops, setCrops] = useState([]);
  const URL = 'https://farmmall-backend.onrender.com/potato/';
  
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

  // Function to calculate exact dates for weeding, fertilizer application, and harvesting
  const calculateProjections = (date) => {
    const dateObj = new Date(date);

    // Specific dates for each activity based on planting date
    const weedingDate = new Date(dateObj.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after planting
    const fertilizerDate = new Date(dateObj.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days after planting
    const harvestingDate = new Date(dateObj.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days after planting

    return {
      weedingDate: weedingDate.toLocaleDateString(),
      fertilizerDate: fertilizerDate.toLocaleDateString(),
      harvestingDate: harvestingDate.toLocaleDateString(),
    };
  };

  return (
    <>
      <div id="projections" className="">
        <h1 className="font-bold text-black">Crop Projections</h1>
        <div id="stats" className="grid grid-cols-1 gap-4">
          {crops.map((crop) => {
            const { weedingDate, fertilizerDate, harvestingDate } = calculateProjections(crop.date);

            return (
              <div key={crop.id} className="bg-custom-green rounded-lg p-4">
                <h2 className="text-lg font-bold">Activity: {crop.activity}</h2>
                <p className="text-white">Planting Date: {new Date(crop.date).toLocaleDateString()}</p>
                <p className="text-white">Weeding Date: {weedingDate}</p>
                <p className="text-white">Fertilizer Application Date: {fertilizerDate}</p>
                <p className="text-white">Harvesting Date: {harvestingDate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projections;
