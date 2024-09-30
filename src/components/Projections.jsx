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

  // Function to calculate projections based on planting date
  const calculateProjections = (date) => {
    const dateObj = new Date(date);

    // Calculate specific dates
    const firstWeedingDate = new Date(dateObj.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after planting
    const secondWeedingDate = new Date(dateObj.getTime() + 21 * 24 * 60 * 60 * 1000); // 21 days after planting
    const fertilizerApplicationDate = new Date(dateObj.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days after planting
    const harvestingDate = new Date(dateObj.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days after planting

    return {
      firstWeedingDate: firstWeedingDate.toLocaleDateString(),
      secondWeedingDate: secondWeedingDate.toLocaleDateString(),
      fertilizerApplicationDate: fertilizerApplicationDate.toLocaleDateString(),
      harvestingDate: harvestingDate.toLocaleDateString(),
    };
  };

  return (
    <div id="projections" className="p-6">
      <h1 className="font-bold text-black mb-4 text-xl">Crop Projections</h1>
      <div id="stats" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {crops.map((crop) => {
          const { firstWeedingDate, secondWeedingDate, fertilizerApplicationDate, harvestingDate } = calculateProjections(crop.date);

          return (
            <div key={crop.id} className="bg-custom-green rounded-lg p-4 text-white">
              <h2 className="text-lg font-bold">Activity: {crop.activity}</h2>
              <p>Planting Date: {new Date(crop.date).toLocaleDateString()}</p>

              {/* Box 1: Planting */}
              {crop.activity === 'Planting' && (
                <>
                  <p>Expected Harvest Date: {harvestingDate}</p>
                </>
              )}

              {/* Box 2: Weeding */}
              {crop.activity === 'Weeding' && (
                <>
                  <p>First Weeding From: {firstWeedingDate}</p>
                  <p>Second Weeding From: {secondWeedingDate}</p>
                </>
              )}

              {/* Box 3: Fertilizer Application */}
              {crop.activity === 'Applying fertilizer' && (
                <>
                  <p>Apply Fertilizer From: {fertilizerApplicationDate}</p>
                  <p>Look for nutrients: Nitrogen, Phosphorus, Potassium</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projections;
