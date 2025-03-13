import { useState, useEffect, useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BASE_URL from "../config";
import UserContext from "../Context/UserContext";

const localizer = momentLocalizer(moment);

function CalendarView() {
  const [events, setEvents] = useState([]);
  const { token } = useContext(UserContext);

  const fetchActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities/`, {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const formattedEvents = data.map((activity) => ({
          title: `${activity.crop_name} - ${activity.activity}`,
          start: moment(activity.activity_date).toDate(),
          end: moment(activity.activity_date).toDate(),
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [token]);

  return (
    <div className="bg-white rounded-lg shadow p-6" id="calendar">
      <h3 className="text-sm mb-4">Calendar</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, fontSize: "12px" }}
      />
    </div>
  );
}

export default CalendarView;