
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import Layout from "./Layout";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order`)
      .then((response) => {
        const formattedEvents = formatEventData(response.data);
        setEvents(formattedEvents);
      });
  }, []);

  const formatEventData = (data) => {
    return data.map((item) => ({
      title: item.name,
      start: item.createdAt,
    }));
  };
 
  return (
    <div>
      <Layout/>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        height={"90vh"}

      />
    </div>
  );
};

export default Calendar;
