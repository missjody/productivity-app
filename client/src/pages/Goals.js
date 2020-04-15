import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import GoalList from "../components/GoalList"
import "./Goals.css"
import userContext from '../utils/userContext'
// import moment from 'moment';


function Goals() {
    // Setting our component's initial state
    // const [goal, setGoal] = useState([])
    const [targetDate, setTargetDate] = useState([])
    const [formObject, setFormObject] = useState({})
    const { goals, loadGoals, user } = useContext(userContext)
    console.log("user and goals", user, goals)

    useEffect(() => {
        loadGoals()
    }, [])

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteGoal(id) {
        API.deleteGoal(id)
            .then(res => loadGoals())
            .catch(err => console.log(err));
    }

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
                goal: formObject.goal,
                targetDate: formObject.targetDate
            })
                .then(() => setFormObject({
                    goal: "",
                    targetDate: ""
                }))
                .then(() => loadGoals())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="containerGoal page">

            <div className="row">
                <div className="col s-8 push-s4 parent">
                    <h5 className="quote" >"Cute Quote Here"<br />--About Goals!</h5>
                    <img src="./images/hand.png" className="goal-image" />
                    <h1 className="goal-child">Set a new goal</h1>
                </div>
            </div>


            <div className="row">
                <div className="col s12">
                    {/* <h2>Set a new goal</h2> */}
                    <form>
                        <div className="row" >
                            <div className="col s12 m7">
                                <input
                                    onChange={handleInputChange}
                                    name="goal"
                                    placeholder="Enter a new goal"
                                    value={formObject.goal} />
                            </div>
                            <div className="col s12 m5">
                                <input onChange={handleInputChange} type="date" name="targetDate" id="targetDate" value={formObject.targetDate} style={{ width: "200px", margin: "0px 10px" }} />
                                <button className="waves-effect waves-light btn-small buttonGold"
                                    disabled={!(formObject.goal)}
                                    onClick={handleFormSubmit}>
                                    Submit Goal</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                {goals.map(goal => {
                    // console.log(goals.Tasks)
                    return <GoalList goal={goal.goal} tasks={goal.Tasks} key={goal._id} goalId={goal._id} loadGoals={loadGoals} deleteGoal={deleteGoal} />
                })}
            </div>
        </div >
    );
}


export default Goals;
