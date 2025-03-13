import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarView({ events }) {
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