import React, { useState } from "react";
import API from "../../utils/API";

function TaskForm(props) {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // Add Task and rerender page 
    function handleTaskFormSubmit(event) {
        event.preventDefault();
        console.log("from task from", props.tasks)
        var GoalId = event.target.attributes.getNamedItem('data-name').value;
        if (formObject.task) {
            API.saveTask(GoalId, {
                _id: GoalId,
                Tasks: [{
                    name: formObject.task,
                    targetDate: formObject.targetDate
                }]
            })
                .then(() => setFormObject({
                    task: "",
                    targetDate: ""
                }))
                .then(() => props.loadGoals())

                .catch(err => console.log(err));
        }
    };
    const finishTask = (item) => {

        console.log("here", item)
        var GoalId = props.goalId;
        var TaskId = item._id;
        var pastTask = {
            name: item.name,
            createdAt: item.createdAt,
            targetDate: item.targetDate,
            complete: !item.complete,
            _id: item._id,
            completeTime: new Date()
        };

        API.completeTask(GoalId, {
            _id: TaskId,
            Tasks: [{
                ...pastTask
            }]
        })

            .then(() => props.loadGoals())
            .catch(err => console.log(err));
    }
    const removeTask = (item) => {

        // console.log("here", item)
        var GoalId = props.goalId;
        var TaskId = item._id;
        var pastTask = {
            name: item.name,
            createdAt: item.createdAt,
            targetDate: item.targetDate,
            complete: item.complete,
            _id: item._id
        };
        API.removeTask(GoalId, {
            _id: TaskId,
            Tasks: [{
                ...pastTask
            }]
        })

            .then(() => props.loadGoals())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <form>
                        <div className="row" style={{ marginBottom: "0 !important" }}>
                            <div className="col s12 m12 l6" style={{ marginBottom: "0 !important" }}>
                                <input
                                    style={{ width: "100%" }}
                                    onChange={handleInputChange}
                                    name="task"
                                    placeholder="Add a Task to get started"
                                    value={formObject.task} />
                            </div>
                            <div className="col s12 m12 l3">
                                <input onChange={handleInputChange} type="date" name="targetDate" id="targetDate" value={formObject.targetDate} style={{ width: "100%", margin: "0px", fontSize: ".95rem" }}></input>
                            </div>
                            <div className="col s12 m7 m12 l3">
                                <button className="btn-small button-gold button-margin"
                                    disabled={!(formObject.task)}
                                    onClick={handleTaskFormSubmit}
                                    data-name={props.goalId}>Add&nbsp;Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                {props.tasks.map(item => {
                    return (
                        <div className="col s12" style={{ borderBottom: "2px solid #8a8158" }}>
                            <h6 key={item._id} style={{ color: item.complete ? '#8a8158' : '#164964' }}>{item.name}&nbsp;&nbsp;&nbsp;<i className="material-icons" onClick={() => finishTask(item)}>check_circle</i>&nbsp;&nbsp;&nbsp;<i className="material-icons" onClick={() => removeTask(item)}>delete</i></h6>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}


export default TaskForm;