import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { data } from 'autoprefixer';


function FarmDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    try {
      const response = await fetch("http://127.0.0.1:8000/submit_contact_form/", {
        method: 'POST',
        body: data,
      });
     
      if (response.ok){
        successAlert();
        setFormData(
          { 
            name: '',
            email: '',
            phone: '',
            item: '',
            location: '',
            startDate: '',
            endDate: ''
          }
        ); 
      }else{
        failureAlert()
      }
    } catch (error) {
      failureAlert("Error during form submission")
    }
  };
  // function to show success alert prompt
  const successAlert = () => {
    Swal.fire({
      title: 'Success',
      text: 'Form submitted succesfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      window.location.href = '/products';
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
    <div className="bottom-0 flex justify-center items-center p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-2 text-center text-custom-orange">Did not find what you were looking for?</h1>
        <p className='text-sm  mb-10 text-center'>If you didn't find what you were looking for on our platform, let us know, and we'll do our best to find it for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="item">Item request</label>
            <input
              type="text"
              name="item"
              id="item"
              value={formData.item}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="location">Current Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full md:w-2/3 p-1 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-center">
          <label className="w-full md:w-1/3 text-gray-700 font-normal text-xs mb-2 md:mb-0" htmlFor="startDate">Rental Dates</label>
          <div className="flex w-full md:w-2/3">
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-1/2 p-1 border border-gray-300 rounded-xl mr-1 placeholder-gray-100 text-xs"
              required
            />
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-1/2 p-1 border border-gray-300 rounded-xl placeholder-gray-100 text-xs"
              required
            />
          </div>
        </div>

        </div>
        <button type="submit" className="mt-6 w-full bg-custom-orange text-white py-2 px-4 rounded-xl hover:bg-orange-500 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FarmDetailsForm;
