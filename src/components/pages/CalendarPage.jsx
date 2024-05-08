/* eslint-disable react/prop-types */
import globalize from "globalize";
import { useState } from "react";
import { useEffect } from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";

import * as API from "../../utils/services/apis";

const localizer = globalizeLocalizer(globalize);

const CalendarPage = () => {
  const [assignedTasks, setAssignedTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAssignedTask() {
      try {
        setIsLoading(true);
        const res = await API.AssignedTask();
        console.log(res.data);
        setAssignedTask(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getAssignedTask();
  }, []);

  function parseDateTime(dateStr, timeStr) {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier.toLowerCase() === "pm" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    } else if (modifier.toLowerCase() === "am" && hours === "12") {
      hours = 0;
    }

    const [month, day, year] = dateStr.split("-");
    const formattedDate = new Date(year, month - 1, day, hours, minutes);

    return formattedDate;
  }

  const events = assignedTasks.list
    ? assignedTasks.list.map((task) => ({
        title: task.taskName,
        office: task.officeName,
        totalHours: `${task.totalHours} hours`,
        start: parseDateTime(task.date, task.startTime),
        end: parseDateTime(task.date, task.endTime),
        allDay: false,
      }))
    : [];

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      {event.office && <p>{event.office}</p>}
      {event.totalHours && <p>{event.totalHours}</p>}
    </div>
  );

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 vh-">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={{ event: EventComponent }}
        style={{ height: "80vh" }}
      />
    </div>
  );
};

export default CalendarPage;
