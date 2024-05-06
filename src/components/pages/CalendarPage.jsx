import globalize from "globalize";
import { useEffect, useState } from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import moment from "moment";

import * as API from "../../utils/services/apis";
import { elapsedTime } from "../../helpers/convertDate";

const localizer = globalizeLocalizer(globalize);

const CalendarPage = () => {
  const [taskList, setTaskList] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    async function getTask() {
      const res = await API.GetTask();
      setTaskList(res.data.task);
    }
    getTask();

    const result1 = elapsedTime(
      moment(new Date(2024, 4, 5, 10, 0, 0)).format()
    );
    setStartDate(result1);

    const result2 = elapsedTime(
      moment(new Date(2024, 4, 5, 19, 0, 0)).format()
    );
    setEndDate(result2);
  }, []);

  const myEventsList = [
    {
      title: "Test",
      subtitle: "Subtitle for Test88",
      start: new Date(
        startDate?.year,
        startDate?.day,
        startDate?.month,
        startDate?.hour,
        startDate?.minute,
        startDate?.second
      ),
      end: new Date(
        endDate?.year,
        endDate?.month,
        endDate?.day,
        endDate?.hour,
        endDate?.minute,
        endDate?.second
      ),
    },
  ];

  console.log(
    "sssss",
    new Date(
      startDate?.year,
      startDate?.month,
      startDate?.day,
      startDate?.hour,
      startDate?.minute,
      startDate?.second
    ),
    new Date(
      endDate?.year,
      endDate?.day,
      endDate?.month,
      endDate?.hour,
      endDate?.minute,
      endDate?.second
    )
  );

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      {event.subtitle && <p>{event.subtitle}</p>}
    </div>
  );

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 vh-">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        components={{ event: EventComponent }}
        style={{ height: "80vh" }}
      />
    </div>
  );
};

export default CalendarPage;
