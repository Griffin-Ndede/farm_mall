import React, { useState, useContext } from 'react';
import { User, MapPin, Calendar, Phone, Mail, Crop, Ruler, Clock } from 'lucide-react';
import UserContext from '../Context/UserContext';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(UserContext);
  
  // Initialize formData with the requested fields
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    farmLocation: {
      address: "1234 County Road 42",
      city: "Heartland Valley",
      state: "Iowa",
      zipCode: "50265",
    },
    farmSize: "450 acres",
    cropVariety: ["Corn", "Soybeans", "Wheat"],
    plantingDates: {
      corn: "April 15",
      soybeans: "May 10",
      wheat: "September 20"
    },
    estimatedHarvestDate: {
      corn: "October 1",
      soybeans: "October 20",
      wheat: "July 15"
    },
    contact: {
      phone: "(555) 123-4567",
      email: "sarah.j@heartlandvalley.com"
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCropVarietyChange = (index, value) => {
    const newCropVariety = [...formData.cropVariety];
    newCropVariety[index] = value;
    setFormData(prev => ({
      ...prev,
      cropVariety: newCropVariety
    }));
  };

  const addCropVariety = () => {
    setFormData(prev => ({
      ...prev,
      cropVariety: [...prev.cropVariety, ""]
    }));
  };

  const removeCropVariety = (index) => {
    const newCropVariety = formData.cropVariety.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      cropVariety: newCropVariety
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated profile:', formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-green-600 h-32"></div>

          {/* Profile Section */}
          <div className="relative px-6 -mt-16">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200"
                alt={formData.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{formData.name}</h1>
                <p className="text-lg text-gray-600 flex items-center justify-center sm:justify-start mt-4">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  {formData.farmLocation.city}, {formData.farmLocation.state}
                </p>
              </div>
            </div>

            {/* Edit Profile Button (visible only in view mode) */}
            {!isEditing && (
              <div className="flex justify-center w-fit mx-auto mt-8">
                <button
                  className="px-6 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700 transition-colors"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            )}

            {isEditing ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-green-600" />
                    Name
                  </h2>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Farm Location Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    Farm Location
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="farmLocation.address"
                      value={formData.farmLocation.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="p-3 border border-gray-300 rounded-xl"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="farmLocation.city"
                        value={formData.farmLocation.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="p-3 border border-gray-300 rounded-xl"
                      />
                      <input
                        type="text"
                        name="farmLocation.state"
                        value={formData.farmLocation.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className="p-3 border border-gray-300 rounded-xl"
                      />
                      <input
                        type="text"
                        name="farmLocation.zipCode"
                        value={formData.farmLocation.zipCode}
                        onChange={handleInputChange}
                        placeholder="ZIP Code"
                        className="p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Farm Size Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-green-600" />
                    Farm Size
                  </h2>
                  <input
                    type="text"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl"
                  />
                </div>

                {/* Crop Variety Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Crop className="w-5 h-5 mr-2 text-green-600" />
                    Crop Variety
                  </h2>
                  {formData.cropVariety.map((crop, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={crop}
                        onChange={(e) => handleCropVarietyChange(index, e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-xl mr-2"
                      />
                      <button
                        type="button"
                        onClick={() => removeCropVariety(index)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addCropVariety}
                    className="mt-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
                  >
                    + Add Another Crop
                  </button>
                </div>

                {/* Planting Dates Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Planting Dates
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Corn</label>
                      <input
                        type="text"
                        name="plantingDates.corn"
                        value={formData.plantingDates.corn}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Soybeans</label>
                      <input
                        type="text"
                        name="plantingDates.soybeans"
                        value={formData.plantingDates.soybeans}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Wheat</label>
                      <input
                        type="text"
                        name="plantingDates.wheat"
                        value={formData.plantingDates.wheat}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Estimated Harvest Date Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Estimated Harvest Date
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Corn</label>
                      <input
                        type="text"
                        name="estimatedHarvestDate.corn"
                        value={formData.estimatedHarvestDate.corn}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Soybeans</label>
                      <input
                        type="text"
                        name="estimatedHarvestDate.soybeans"
                        value={formData.estimatedHarvestDate.soybeans}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Wheat</label>
                      <input
                        type="text"
                        name="estimatedHarvestDate.wheat"
                        value={formData.estimatedHarvestDate.wheat}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-green-600 mr-3" />
                        <input
                          type="text"
                          name="contact.phone"
                          value={formData.contact.phone}
                          onChange={handleInputChange}
                          className="flex-1 p-3 border border-gray-300 rounded-xl"
                        />
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-green-600 mr-3" />
                        <input
                          type="text"
                          name="contact.email"
                          value={formData.contact.email}
                          onChange={handleInputChange}
                          className="flex-1 p-3 border border-gray-300 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save/Cancel Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-300 rounded-3xl hover:bg-gray-400"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <>
                {/* View Mode Sections */}
                {/* Farm Location */}
                <div className="mt-8 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" />
                    Farm Location
                  </h2>
                  <p className="text-gray-600">{formData.farmLocation.address}</p>
                  <p className="text-gray-600">
                    {formData.farmLocation.city}, {formData.farmLocation.state} {formData.farmLocation.zipCode}
                  </p>
                </div>

                {/* Farm Size */}
                <div className="mt-6 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-green-600" />
                    Farm Size
                  </h2>
                  <p className="text-gray-600">{formData.farmSize}</p>
                </div>

                {/* Crop Variety */}
                <div className="mt-6 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Crop className="w-5 h-5 mr-2 text-green-600" />
                    Crop Variety
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {formData.cropVariety.map((crop, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full shadow-sm">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Planting Dates */}
                <div className="mt-6 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Planting Dates
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Corn</p>
                      <p className="text-gray-600">{formData.plantingDates.corn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Soybeans</p>
                      <p className="text-gray-600">{formData.plantingDates.soybeans}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Wheat</p>
                      <p className="text-gray-600">{formData.plantingDates.wheat}</p>
                    </div>
                  </div>
                </div>

                {/* Estimated Harvest Date */}
                <div className="mt-6 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Estimated Harvest Date
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Corn</p>
                      <p className="text-gray-600">{formData.estimatedHarvestDate.corn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Soybeans</p>
                      <p className="text-gray-600">{formData.estimatedHarvestDate.soybeans}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Wheat</p>
                      <p className="text-gray-600">{formData.estimatedHarvestDate.wheat}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-6 bg-green-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-green-600 mr-3" />
                        <p className="text-gray-600">{formData.contact.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-green-600 mr-3" />
                        <p className="text-gray-600">{formData.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;