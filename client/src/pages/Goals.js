import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import GoalList from "../components/GoalList"
// import "./Goals.css"
import { Row } from "../components/Grid";
import userContext from '../utils/userContext'
// import moment from 'moment';


function Goals() {
    // Setting our component's initial state
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
        <div id="containerGoal">
            <div className="test">
                <div className="container">
                    <div id="congrats" className="popup hidden"><center><h2><br /><br />Congrats! <br />You did it!</h2></center></div>

                    <Row>
                        <div className="col s-8 parent">
                            <h5 className="goal-quote" >"If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes."<br />--Andrew Carnegie</h5>
                            <img src="./images/hand.png" className="goal-image responsive-img" alt="An image of a woman's hands resting on a striped pad of paper on which she has written a list of todos. The photo is composed of black and plum lines striped together to render the image." />
                            <h1 className="goal-child">Set a new goal</h1>
                        </div>
                    </Row>


                    <Row>

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
                                        <button className="waves-effect waves-light btn-small button-gold"
                                            disabled={!(formObject.goal)}
                                            onClick={handleFormSubmit}>
                                            Submit Goal</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Row>
                    <div className="row">
                        {goals.map(goal => {
                            // console.log(goals.Tasks)
                            return <GoalList goal={goal} tasks={goal.Tasks} key={goal._id} goalId={goal._id} loadGoals={loadGoals} deleteGoal={deleteGoal} />
                        })}
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Goals;
