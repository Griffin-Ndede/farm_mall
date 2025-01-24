import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaSeedling, FaCalendarAlt, FaHome, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Calendar Localizer
const localizer = momentLocalizer(moment);

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    cropName: "",
    activity: "",
    activityDate: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const activityDate = new Date(formData.activityDate);

    // Add the main event to the calendar
    const newEvent = {
      title: `${formData.cropName} - ${formData.activity}`,
      start: activityDate,
      end: activityDate,
    };

    // If the activity is planting, add weeding and harvesting projections
    let projectedEvents = [];
    if (formData.activity.toLowerCase() === "planting") {
      const plantingDate = moment(formData.activityDate);
      projectedEvents = [
        {
          title: `${formData.cropName} - Weeding`,
          start: plantingDate.clone().add(3, "weeks").toDate(), // Use .toDate() to convert to Date object
          end: plantingDate.clone().add(3, "weeks").toDate(),   // Use .toDate() to convert to Date object
        },
        {
          title: `${formData.cropName} - Harvesting`,
          start: plantingDate.clone().add(3, "months").toDate(), // Use .toDate() to convert to Date object
          end: plantingDate.clone().add(3, "months").toDate(),   // Use .toDate() to convert to Date object
        },
      ];
    }

    // Update events in the calendar
    setEvents([...events, newEvent, ...projectedEvents]);

    // Clear the form
    setFormData({ cropName: "", activity: "", activityDate: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex h-full">
      {/* Side Navigation */}
      <div
        className={`w-64 bg-custom-green text-white flex flex-col p-4 top-0 fixed h-full z-10 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
        <nav className="space-y-4">
          <Link to='/'>
          <button className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-800">
            <FaHome />
            <span>Home</span>
          </button>
          </Link>
          <AnchorLink href="#calendar">
          <button className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-800">
            <FaCalendarAlt />
            <span>Crop tracking</span>
          </button>
          </AnchorLink>
          <button className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-800">
            <FaSeedling />
            <span>Crop Tracking</span>
          </button>   <button className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-800">
            <FaSeedling />
            <span>Crop Tracking</span>
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
          <div className="rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Add Crop Activity</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Crop Name</label>
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
                <label className="block text-gray-700 font-medium">Activity</label>
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
                <label className="block text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  name="activityDate"
                  value={formData.activityDate}
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
