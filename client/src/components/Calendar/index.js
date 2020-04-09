import React, { Component, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default () => {
    let [calendarEvent, setCalendarEvent] = useState({
        events: [
            {
                start: moment().toDate(),
                end: moment().add(1, "days").toDate(),
                title: "Build this thingy!"
            }
        ]
    }) 

    const onEventResize = (type, { event, start, end, allDay }) => {
        setCalendarEvent({
            ...calendarEvent.events,
            [calendarEvent.events[0].start]: start,
            [calendarEvent.events[0].end]: end,
        });
        return { events: calendarEvent.events }
    }

    const onEventDrop = ({ event, start, end, allDay }) => {
        console.log(start);
    }

    return(
        <div className="Calendar">
            <DnDCalendar
                defaultDate = { moment().toDate() }
                defaultView = "month"
                events = { calendarEvent.events }
                localizer = { localizer }
                onEventDrop = { onEventDrop }
                onEventResize = { onEventResize }
                resizable
                style = {{ height: "100vh" }}
            />
        </div>
    )
}