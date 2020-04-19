import React, { useEffect, useState, useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import userContext from "../../utils/userContext";
import Tasks from '../Tasks';
import API from '../../utils/API'
// import './index.css'
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const DnDtasks = withDragAndDrop(Tasks);


export default () => {
    const { goals } = useContext(userContext);
    const { setGoals } = useContext(userContext);
    const [modGoals, setModGoals] = useState(goals);
    console.log("Goals from calendar page: ", goals);
    useEffect(() => {
        console.log(goals)
        const tasks = [];
        goals.map(goal => goal.Tasks.map(a => {
            console.log(moment().toDate().toISOString());
            tasks.push({
                title: a.name,
                goalID: goal._id,
                Id: a._id,
                start: new Date(a.startDate),
                end: new Date(a.targetDate)
            })
            console.log("here is A: ", a)
        }))
        const tasksWID = tasks.map((a, i) => { return { ...a, id: i } })

        setCalendarEvent({ events: tasksWID })
    }, [goals])

    let [calendarEvent, setCalendarEvent] = useState({
        events: [
            {
                start: moment().toDate(),
                end: moment().toDate(),
                title: "Build this thingy!"
            }
        ]
    })

    const handleTaskChange = (vals) => {
        var updatedTask = {
            _id: vals.Id,
            name: vals.title,
            startDate: vals.start,
            targetDate: vals.end
        }
        API.updateTask(vals.goalID, updatedTask).then(res => console.log(res)).catch(err => console.log(err))
        console.log("handle this")
    }

    const onEventResize = ({ event, start, end }) => {
        let newEvents = calendarEvent.events;
        newEvents[event.id].start = start;
        newEvents[event.id].end = end;
        setCalendarEvent({
            events: newEvents
        });
        console.log("New task RESIZE! - ", newEvents[event.id])
        handleTaskChange(newEvents[event.id])
    }

    const onEventDrop = ({ event, start, end }) => {

        let newEvents = calendarEvent.events;
        newEvents[event.id].start = start;
        newEvents[event.id].end = end;
        setCalendarEvent({
            events: newEvents
        })
        console.log("New task DROP! - ", newEvents[event.id])
        handleTaskChange(newEvents[event.id])
        console.log("drop it!")
    }

    return (
        <div className="Calendar">
            <DnDCalendar
                defaultDate={moment().toDate()}
                defaultView="month"
                localizer={localizer}
                events={calendarEvent.events}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                // resizable
                style={{ height: "70vh" }}
            />
        </div>
    )
}
