import { useState, useEffect } from 'react';
import axios from 'axios';


function FarmManagement() {
  const [crops, setCrops] = useState([]);
  const URL = 'https://farmmall-backend.onrender.com/potato/';

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get(URL);
        setCrops(response.data);
      } catch (error) {
        console.error("Error fetching crops:", error);
      }
    };

    fetchCrops();
  }, []);

  // Format date to a more readable format
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div id="last-users" className="py-4">
      <h1 className="font-bold text-black">Recent Updates</h1>
      <div className="overflow-x-scroll">
        <table className="w-full whitespace-nowrap">
          <thead className="bg-custom-green">
            <tr className="text-white text-sm">
              <th className="text-left py-3 px-2 rounded-l-lg">Crop</th>
              <th className="text-left py-3 px-2">Activity</th>
              <th className="text-left py-3 px-2">Date</th>
              <th className="text-left py-3 px-2">County</th>
              <th className="text-left py-3 px-2">Fertilizer</th>
              <th className="text-left py-3 px-2">Irrigation</th>
              <th className="text-left py-3 px-2 w-fit rounded-r-lg">Notes</th>
            </tr>
          </thead>
          <tbody className="text-black text-xs">
            {crops.map((crop) => (
              <tr key={crop.id} className="border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span>Potato</span>
                  </div>
                </td>
                <td className="py-3 px-2">{crop.activity}</td>
                <td className="py-3 px-2">{formatDate(crop.date)}</td>
                <td className="py-3 px-2">{crop.county}</td>
                <td className="py-3 px-2">{crop.fertilizer_type}</td>
                <td className="py-3 px-2">{crop.irrigation_used === 'yes' ? 'Yes' : 'No'}</td>
                <td className="py-3 px-2">{crop.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FarmManagement;
