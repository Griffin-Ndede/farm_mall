import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaSeedling, FaCalendarAlt, FaHome, FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BASE_URL from "../config";

// Calendar Localizer
const localizer = momentLocalizer(moment);

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    cropName: "",
    activity: "",
    activity_date: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  // Fetch activities from the backend
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`${BASE_URL}/activities/`); 
        const data = await response.json();
        console.log(data)
        // Map backend data to event format
        const formattedEvents = data.map((activity) => ({
          title: `${activity.crop_name} - ${activity.activity}`,
          start: moment(activity.activity_date).toDate(),
          end: moment(activity.activity_date).toDate(),
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const activity_date = new Date(formData.activity_date);

    // Main event object
    const newEvent = {
        crop_name: formData.cropName, 
        activity: formData.activity,   
        activity_date: activity_date,  
    };

    let projectedEvents = [];
    if (formData.activity.toLowerCase() === "planting") {
        const plantingDate = moment(formData.activity_date);
        projectedEvents = [
            {
                crop_name: formData.cropName,
                activity: "Weeding",
                activity_date: plantingDate.clone().add(3, "weeks").toDate(),
            },
            {
                crop_name: formData.cropName,
                activity: "Harvesting",
                activity_date: plantingDate.clone().add(3, "months").toDate(),
            },
        ];
    }

    const allEvents = [newEvent, ...projectedEvents];

    // Update the calendar with the new events
    setEvents([...events, ...allEvents]);

    // Clear the form
    setFormData({ cropName: "", activity: "", activity_date: "" });

    // Post the events to the backend
    try {
        const response = await fetch("http://127.0.0.1:8000/activities/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(allEvents), // Send combined event data
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Events successfully posted:", result);
        } else {
            console.error("Error posting events:", response.statusText);
        }
    } catch (error) {
        console.error("Error posting events:", error);
    }
};



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-full">
      {/* Side Navigation */}
      <div
        className={`w-64 bg-custom-green text-white flex flex-col p-4 top-0 fixed h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold md:text-2xl">Farm Dashboard</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
        </div>
        <nav className="space-y-4   p-4">
          <Link to="/" className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200">
            <FaHome className="text-green-600 group-hover:text-green-800" />
            <span className="text-white  group-hover:text-green-800">Home</span>
          </Link>

          <AnchorLink href="#activity">
            <button className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200">
              <FaSeedling className="text-green-600 group-hover:text-green-800" />
              <span className="text-white  group-hover:text-green-800">Add Activity</span>
            </button>
          </AnchorLink>
          <AnchorLink
            href="#calendar"
            className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200"
          >
            <FaCalendarAlt className="text-green-600 group-hover:text-green-800" />
            <span className="text-white  group-hover:text-green-800">Calendar</span>
          </AnchorLink>



          <button className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200">
            <FaUser className="text-green-600 group-hover:text-green-800" />
            <span className="text-white  group-hover:text-green-800">User Profile</span>
          </button>
        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-8 bg-gray-100">
        <button
          className="block md:hidden text-green-700 mb-4"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6">Crop Production Tracker</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Form */}
          <div className="rounded-lg h-screen shadow p-6" id="activity">
            <h3 className="text-xl font-bold mb-4">Add Crop Activity</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 ">Crop Name</label>
                <input
                  type="text"
                  name="cropName"
                  value={formData.cropName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter crop name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 ">Activity</label>
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
                <label className="block text-gray-700 ">Date</label>
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

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow p-6" id="calendar">
            <h3 className="text-xl font-bold mb-4">Calendar</h3>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 400 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
