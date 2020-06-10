import React, { Component } from "react";

const TimeTracker = () => {
// class TimeTracker extends Component {
    // constructor(){
        var timer = "00:00:00";
        var active = false;
        TimerState();
    
    function start_timer() {
        if (active) {
            // var timer = document.getElementById("timer").innerHTML;
            var arr = timer.split(":");
            var hr = arr[0];
            var min = arr[1];
            var sec = arr[2];
            
            if (sec == 59) {
                if (min == 59) {
                    hr++;
                    min = 0;
                    if (hr < 10) hr = "0" + hr;
                } else {
                    min++;
                } if (min < 10) min = "0" + min;
                sec = "00";
            } else {
                sec++;
                if (sec < 10) sec = "0" + sec;
            }
            timer = hr + ":" + min + ":" + sec;
            setTimeout(start_timer, 1000);
        }
    }

    function TimerState() {
        if (active == false) {
            active = true;
            start_timer();
            console.log("timer is running");
            console.log("timer ", timer);
        } else {
            active = false;
            console.log("timer paused");
            console.log("timer ", timer);
        }
    }
    return(timer)
}
// }
// module.exports = {TimeTracker: TimeTracker, TimerState: TimerState};
export default TimeTracker;