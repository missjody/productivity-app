import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import GoalList from "../components/GoalList"
import "./Goals.css"
import { Row } from "../components/Grid";
import userContext from '../utils/userContext'
// import moment from 'moment';
import xsmall from "./xsmall.png";
import small from "./small.png";
import medium from "./medium.png";
import large from "./large.png";
import xlarge from "./xlarge.png";


function Goals() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({})
    const { goals, loadGoals, user } = useContext(userContext)

    useEffect(() => {
        loadGoals()
    }, [])

    // Deletes a goal and reload
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

    // Handle goal submit and reload
    function handleFormSubmit(event) {
        event.preventDefault();
        var targetDateHours = formObject.targetDate + "T23:55:00.000Z"

        if (formObject.goal) {
            API.saveGoal({
                goal: formObject.goal,
                targetDate: targetDateHours
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
        <div>

            <img
                id="goalImage"
                sizes="(max-width: 100vw) 100vw"
                srcset={`
                                            ${xsmall} 190w,
                                            ${small} 551w,
                                            ${medium} 833w,
                                            ${large} 1058w,
                                            ${xlarge} 1538w
                                            `}
                src="yellowhand2_zu1ewj_c_scale,w_1538.png"
                alt=""
            />
            <h1 className="goal-child hide-on-med-and-down">Set a new goal</h1>

            <div id="containerGoal">
                <div id="congrats" className="popup hidden">
                            <h4 id="bubbleTest"><br /><br /><br />Congrats! <br />You did it!</h4>
                </div>

                <div className="test">
                    <div className="container">
                        {/* <Row> */}
                        {/* <div className="col s-8 parent"> */}
                        {/* <h5 className="goal-quote" >"If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes."<br />--Andrew Carnegie</h5> */}

                        {/* <img src="./images/hand.png" className="goal-image responsive-img" alt="An image of a woman's hands resting on a striped pad of paper on which she has written a list of todos. The photo is composed of black and plum lines striped together to render the image." /> */}
                        {/* </div>
                        </Row> */}
                        <Row>
                            <div className="col s12">
                                <form>
                                    <div className="row" >
                                        <div className="col s12 m12 l6">
                                            <input
                                                onChange={handleInputChange}
                                                name="goal"
                                                placeholder="Enter a new goal"
                                                value={formObject.goal} />
                                        </div>
                                        <div className="col s12 m12 l3">
                                            <input onChange={handleInputChange} type="date" name="targetDate" id="targetDate" value={formObject.targetDate} style={{ width: "100%", margin: "0px 0px", fontSize: ".95rem" }} />
                                        </div>
                                        <div className="col s12 m12 l3">
                                            <button className="waves-effect waves-light btn-small button-gold button-margin "
                                                disabled={!(formObject.goal)}
                                                onClick={handleFormSubmit}>
                                                Add&nbsp;Goal</button>                                    </div>
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
        </div>
    );
}


export default Goals;