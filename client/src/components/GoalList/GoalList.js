import React, { useState, useContext } from 'react'
import userContext from '../../utils/userContext';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API'
import "./GoalList.css"
import { PromiseProvider } from 'mongoose';
import TaskForm from "../TaskForm/TaskForm"

export default function GoalList(props) {
    return (
        <div className="goal" >
            <h5><b>Goal: {props.goal}</b></h5>
            <TaskForm tasks={props.tasks} goalId={props.goalId} loadGoals={props.loadGoals} formObject={props.formObject} handleTaskFormSubmit={props.handleTaskFormSubmit} handleInputChange={props.handleInputChange} />
        </div >
    )
}
