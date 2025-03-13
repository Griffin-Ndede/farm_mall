import React from 'react';
import {
  User,
  MapPin,
  Tractor,
  Building2,
  Phone,
  Mail,
  Globe,
  Calendar,
} from 'lucide-react';

function UserProfile() {
  // This would typically come from an API/database
  const farmer = {
    name: "Sarah Johnson",
    role: "Farm Owner & Manager",
    location: {
      address: "1234 County Road 42",
      city: "Heartland Valley",
      state: "Iowa",
      zipCode: "50265",
      coordinates: "41.5868° N, 93.7150° W",
    },
    experience: "15+ years",
    profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200",
    farmDetails: {
      name: "Johnson Family Farms",
      size: {
        total: "450 acres",
        breakdown: {
          cropland: "380 acres",
          pasture: "50 acres",
          facilities: "20 acres",
        },
      },
      livestock: "120 cattle",
    },
    contact: {
      email: "sarah.j@heartlandvalley.com",
      phone: "(555) 123-4567",
      website: "www.johnsonfarmsllc.com",
      businessHours: "Mon-Sat: 7AM-6PM",
    },
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-custom-green h-32"></div>

          {/* Profile Section */}
          <div className="relative px-6 -mt-16">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src={farmer.profileImage}
                alt={farmer.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{farmer.name}</h1>
                <p className="text-lg text-gray-600 flex items-center justify-center sm:justify-start mt-6">
                  <User className="w-5 h-5 mr-2 text-custom-green" />
                  {farmer.role}
                </p>
                <p className="text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                  <Building2 className="w-5 h-5 mr-2 text-custom-green" />
                  {farmer.farmDetails.name}
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="mt-8 bg-green-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-custom-green" />
                Farm Location
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">{farmer.location.address}</p>
                  <p className="text-gray-600">
                    {farmer.location.city}, {farmer.location.state} {farmer.location.zipCode}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{farmer.location.coordinates}</p>
                </div>
              </div>
            </div>
            
            {/* Farm Size Section */}
            <div className="mt-8 bg-green-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tractor className="w-6 h-6 mr-2 text-custom-green" />
                Farm Size & Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Total Area</p>
                  <p className="text-lg font-bold text-gray-900">{farmer.farmDetails.size.total}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Cropland</p>
                  <p className="text-lg font-bold text-gray-900">{farmer.farmDetails.size.breakdown.cropland}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Pasture</p>
                  <p className="text-lg font-bold text-gray-900">{farmer.farmDetails.size.breakdown.pasture}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="my-8 bg-green-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-custom-green" />
                    <p className="ml-3 text-gray-700">{farmer.contact.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-custom-green" />
                    <p className="ml-3 text-gray-700">{farmer.contact.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-custom-green" />
                    <p className="ml-3 text-gray-700">{farmer.contact.website}</p>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-custom-green" />
                    <p className="ml-3 text-gray-700">{farmer.contact.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;