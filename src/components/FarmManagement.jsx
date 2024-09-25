import React, {useState, useEffect} from 'react'
import axios from 'axios';

function FarmManagement() {
    const [crops, setCrops] = useState([]);

  const URL = 'http://127.0.0.1:8000/potato/';

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(URL);
        setCrops(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);
  return (
    <>
         <div id="last-users">
                    <h1 className="font-bold py-4 ">Recent updates</h1>
                    <div className="overflow-x-scroll">
                        <table className="w-full whitespace-nowrap">
                        <thead className="bg-black/60">
    <tr>
        <th className="text-left py-3 px-2 rounded-l-lg">Crop</th>
        <th className="text-left py-3 px-2">Region</th>
        <th className="text-left py-3 px-2">Planting date</th>
        <th className="text-left py-3 px-2">Fertilizer used</th>
        <th className="text-left py-3 px-2">Notes</th>
    </tr>
</thead>
<tbody>
    {crops.map((crop) => (
        <tr key={crop.id} className="border-b border-gray-700">
            <td className="py-3 px-2 font-bold">
                <div className="inline-flex space-x-3 items-center">
                    {/* <span>
                        <img className="rounded-full w-8 h-8" src={crop.imageUrl} alt="" />
                    </span> */}
                    <span>Potato</span>
                </div>
            </td>
            <td className="py-3 px-2">{crop.county}</td>
            <td className="py-3 px-2">{crop.planting_date}</td>
            <td className="py-3 px-2">{crop.fertilizer_type}</td>
            <td className="py-3 px-2">{crop.notes}</td>

        </tr>
    ))}
</tbody>          
                        </table>
                    </div>
                </div>
    </>
  )
}

export default FarmManagement
