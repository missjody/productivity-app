import React from 'react'
import { Col, Row } from "../Grid";
import Collapsible from "../collapsible/collapsible"
import moment from "moment"


export default function GoalList(props) {
    //How many Days til the Goal is Due
    function daysLeft(targetDate) {
        var currentDate = moment();
        var goalDate = moment(targetDate)
        console.log("number of days: ", currentDate, goalDate, goalDate.diff(currentDate, "days"));
        if (parseInt(goalDate.diff(currentDate, "days")) >= 0) {
            return parseInt(goalDate.diff(currentDate, "days") + 1) + " days"
        } else {
            return "Past Due"
        }
    }
    //Function to get percent and display popup at 100%
    var element = document.getElementById("congrats");
    console.log("all props on goals page: ", props)
    function percentage(tasks) {
        var count = tasks.reduce((accumulator, goal) => {
            if (goal.complete) {
                return accumulator + 1
            }
            else {
                return accumulator
            }

        }, 0)
        var date = new Date();
        var completeTimes = new Date(props.goal.completeTime)
        var FIVE_MIN = 5000;
        var percent = (count / tasks.length) * 100;
        if (tasks.length === 0) {
            return 0 + "%"
        } else if ((count / tasks.length) * 100 === 100 && (date - completeTimes) <= FIVE_MIN) {
            // var percent = (count / tasks.length) * 100;
            console.log("Goal is 100%:  ", percent)
            setTimeout(function () {
                console.log("something")
                element.classList.remove("hidden");
            }, 500);
            setTimeout(function () {
                console.log("remove something")
                element.classList.add("hidden");
            }, 5000);
            return parseInt(percent) + "%"
        }
        else {
            // var percent = (count / tasks.length) * 100;
            return parseInt(percent) + "%"
        }

    }
    return (
        <Col size="sm-12 l-12">
            <Row>
                <div className="goal-list">
                    <h5 style={{ paddingLeft: "5px" }}><b>Goal: {props.goal.goal}</b> <button className="btn btn-primary button-gold" onClick={() => props.deleteGoal(props.goalId)}><i className="material-icons">delete</i></button></h5>
                    <span style={{ margin: "0px", padding: "0px 5px" }}>Due in: {daysLeft(props.goal.targetDate)}</span>
                    <br />
                    <span style={{ margin: "0px", padding: "0px  5px" }}>Click the progress bar to add tasks</span>
                    <Collapsible key={props.goal._id} percent={props.goal.percentage} percentage={percentage} tasks={props.tasks} goalId={props.goalId} loadGoals={props.loadGoals} formObject={props.formObject} handleTaskFormSubmit={props.handleTaskFormSubmit} handleInputChange={props.handleInputChange} />
                </div >
            </Row>
        </Col>
    )
}
