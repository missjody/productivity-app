import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import GoalList from "../components/GoalList"

function Goals() {
    // Setting our component's initial state
    const [goal, setGoal] = useState([])
    const [task, setTask] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadGoals()
    }, [])

    // Loads all books and sets them to books
    function loadGoals() {
        console.log("Making the call")
        API.getGoals()
            .then(res =>
                setGoal(res.data)
            )
            .catch(err => console.log(err));
    };

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
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.goal) {
            API.saveGoal({
                goal: formObject.goal
            })
                .then(() => setFormObject({
                    goal: ""
                }))
                .then(() => loadGoals())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <h1>Set a new goal</h1>
            <form>
                <input
                    onChange={handleInputChange}
                    name="goal"
                    placeholder="goal"
                    value={formObject.goal}

                />
                <button
                    disabled={!(formObject.goal)}
                    onClick={handleFormSubmit}
                >
                    Submit Goal
                    </button>
            </form>

            <div className="row">
                {goal.map(goals => {
                    console.log(goals.Tasks)
                    return <GoalList goal={goals.goal} tasks={goals.Tasks} key={goals.goal} goalId={goals._id} loadGoals={loadGoals} />
                })}
            </div>
        </div >
    );
}


export default Goals;
