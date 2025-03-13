import { useState, useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../Context/UserContext";
import BASE_URL from "../config";
import moment from "moment";

function ActivitiesForm() {
  const [formData, setFormData] = useState({
    crop_name: "",
    activity: "",
    activity_date: "",
  });
  const { token } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const activity_date = moment(formData.activity_date).format("YYYY-MM-DD");

    const newEvent = {
      crop_name: formData.crop_name,
      activity: formData.activity,
      activity_date: activity_date,
    };

    try {
      const response = await fetch(`${BASE_URL}/activities/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access}`,
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Activity successfully posted:", result);
        Swal.fire({
          title: "Success!",
          text: "Activity added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({ crop_name: "", activity: "", activity_date: "" }); // Clear form
      } else {
        console.error("Error posting activity:", response.statusText);
        Swal.fire({
          title: "Error!",
          text: "Failed to add activity.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error posting activity:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="rounded-lg shadow p-6 h-fit" id="activity">
      <h3 className="text-xl font-bold mb-4">Add Crop Activity</h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Crop Name</label>
          <input
            type="text"
            name="crop_name"
            value={formData.crop_name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter crop name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Activity</label>
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter activity (e.g., Planting)"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="activity_date"
            value={formData.activity_date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 rounded-3xl mx-auto flex justify-center text-white bg-custom-green"
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}

export default ActivitiesForm;