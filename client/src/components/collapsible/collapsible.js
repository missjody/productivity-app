import React, { Component } from 'react';
import TaskForm from "../TaskForm/TaskForm"

class Collapse extends Component {
    constructor() {
        super();

        // Initial state
        this.state = { open: false };

    }
    componentDidMount() {
        console.log("prps:", this.props)
    }

    toggle() {
        console.log(this.props.tasks)
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className="cart">
                <div className="progress blue lighten-4" onClick={this.toggle.bind(this)} >
                    <div className="determinate blue right-align"
                        style={{ width: this.props.percentage(this.props.tasks), animation: "grow 2s", color: this.props.percent === "0%" ? "#164964" : "white", padding: "8px 0px" }}>
                        &nbsp;{this.props.percent}&nbsp;</div>
                </div>
                <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
                    <hr></hr>
                    <div>
                        <TaskForm tasks={this.props.tasks} goalId={this.props.goalId} loadGoals={this.props.loadGoals} formObject={this.props.formObject} handleTaskFormSubmit={this.props.handleTaskFormSubmit} handleInputChange={this.props.handleInputChange} />
                    </div>
                </div>
            </div>
        );
    }

};

export default Collapse;