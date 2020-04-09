import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
// import "./TaksForm.css"

function TaskForm(props) {
    // Setting our component's initial state
    const [task, setTask] = useState([])
    // const [goal, setGoal] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    // useEffect(() => {
    //     console.log(props)
    //     // loadGoals()
    // }, [])

    // Loads all books and sets them to books
    // function loadGoals() {
    //     console.log("Making the call from another page")
    //     API.getGoals()
    //         .then(res =>
    //             setTask(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleTaskFormSubmit(event) {
        event.preventDefault();
        var GoalId = event.target.attributes.getNamedItem('data-name').value;
        if (formObject.task) {
            API.saveTask(GoalId, {
                _id: GoalId,
                Tasks: [{
                    name: formObject.task
                }]
            })
                .then(() => setFormObject({
                    task: ""
                }))
                .then(() => props.loadGoals())

                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <form>
                <input
                    onChange={handleInputChange}
                    name="task"
                    placeholder="Add a Task to get started"
                    value={formObject.task}

                />
                <br />
                <button
                    disabled={!(formObject.task)}
                    onClick={handleTaskFormSubmit}
                    data-name={props.goalId}
                >Add a Task
                    </button>
            </form>

            <div className="row">
                {props.tasks.map(item => {
                    console.log("Items: ", item.name)
                    return (
                        <p>{item.name}</p>
                    )
                })}
            </div>
        </div >
    );
}


export default TaskForm;