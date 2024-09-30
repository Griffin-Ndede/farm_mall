import React, { useState } from 'react';
import Swal from 'sweetalert2';

function FarmDetailsForm() {
  const [formData, setFormData] = useState({
    activity: '',
    county: '',
    date: '',
    fertilizer_type: '',
    irrigation_used: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://farmmall-backend.onrender.com/potato/", {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        successAlert();
        setFormData({ 
          activity: '',
          date: '',
          county: '',
          fertilizer_type: '',
          irrigation_used: '',
          notes: '',
        });
      } else {
        failureAlert("Failed to submit form");
      }
    } catch (error) {
      failureAlert("Error during form submission");
    }
  };

  // function to show success alert prompt
  const successAlert = () => {
    Swal.fire({
      title: 'Success',
      text: 'Form submitted successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      window.location.href = '/farmmanagement'; // Corrected redirect
    });
  };

  // function to show failure alert prompt
  const failureAlert = (message) => {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className="bg-custom-green p-8 ml-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-white">
          Share information about recent activities on your farm?
        </h1>
        <p className='text-xs sm:text-sm md:text-base mb-10 text-center text-white'>
          The information you provide will help us give you estimates for your farm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm md:text-base">
          <div className="flex flex-col md:flex-row items-center ">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="activity">
              Activity
            </label>
            <select
              name="activity" 
              id="activity" 
              value={formData.activity} 
              onChange={handleChange} 
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl text-black"
              required
            >
              <option value="">Select an activity</option>
              <option value="Planting">Planting</option>
              <option value="Weeding">Weeding</option>
              <option value="Applying fertilizer">Applying fertilizer</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="county">
              Date
            </label>
            <input
              type="date" 
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl text-black"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="county">
              County
            </label>
            <input
              type="text" 
              name="county"
              id="county"
              value={formData.county}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl text-black"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="fertilizer_type">
              Fertilizer type
            </label>
            <input
              type="text"
              name="fertilizer_type" 
              id="fertilizer_type" 
              value={formData.fertilizer_type}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl text-black"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="irrigation_used">
              Irrigation used
            </label>
            <div className="w-full md:w-2/3 flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="irrigation_used"
                  value="yes"
                  checked={formData.irrigation_used === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="irrigation_used"
                  value="no"
                  checked={formData.irrigation_used === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                No
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-white font-normal mb-2 md:mb-0" htmlFor="notes">
              Notes
            </label>
            <textarea
              type="text"
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl text-black h-20"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-6 w-full bg-green text-white py-2 px-4 rounded-xl hover:bg-green transition duration-300">
          Submit
        </button>
      </form>
    </>
  );
}

export default FarmDetailsForm;
