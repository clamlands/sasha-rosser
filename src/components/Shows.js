import { React, useEffect, useState } from "react";

export default function Shows() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getCalendar() {
      let today = new Date().toISOString();
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/ndj7v5280kc6tlk4qi75r5taqo@group.calendar.google.com/events?key=AIzaSyAc_spvH8Ijkc7Jwzv9aztEXM94cW8ImVI&timeMin=${today}&singleEvents=True&orderBy=startTime`
      );
      const eventsData = await response.json();
      setEvents(eventsData.items);
    }
    getCalendar();
  }, []);

  function mapItems() {
    return events.map((item, i) => {
      return (
        <div key={i} className="event">
          <div className="time">{convertDate(item.start.dateTime)}</div>
          <div className="summary">{item.summary}</div>
          <div>{item.location}</div>
        </div>
      );
    });
  }

  function convertDate(date) {
    const newDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const time = newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}, ${time}`;
  }

  return (
    <main className="page shows">
      <h1>Upcoming Shows</h1>
      {events.length ? mapItems() : ""}
    </main>
  );
}
