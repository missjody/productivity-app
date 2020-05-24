 import React from "react";
import { now } from "moment";
//  import TimeTracker from "react-time-tracker";
  
//   const timeTrack = (event) => {
//     let startTime = new Date().getTime();
//     // setTimeout(myCallback, 200);
  
//     let endTime = new Date().getTime();
//     let timeSpent = endTime - startTime;
//     let meditationTime = [];
//     meditationTime.push(timeSpent)
//     // _gaq.push(['_trackTiming', 'Test', 'callback_timeout', timeSpent, 'animation']);
//     // <TimeTracker onSave={this.onSave} >
//     // <TimeTracker/>
//         console.log('Total time spent by user')
//     //  </TimeTracker>
//   }

// 'use strict';

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// var _react = require('react');

// var _react2 = _interopRequireDefault(_react);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Chayan.Bhaisare on 01/05/2018.
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// var TimeTracker = function (_React$Component) {
//   _inherits(TimeTracker, _React$Component);

//   function TimeTracker(props) {
//     _classCallCheck(this, TimeTracker);

//     var _this = _possibleConstructorReturn(this, (TimeTracker.__proto__ || Object.getPrototypeOf(TimeTracker)).call(this, props));

//     _this.start = 0;
//     _this.end = 0;
//     _this.total = 0;
//     _this.onPause = _this.onPause.bind(_this);
//     _this.onResume = _this.onResume.bind(_this);
//     return _this;
//   }

//   _createClass(TimeTracker, [{
//     key: 'componentWillReceiveProps',
//     value: function componentWillReceiveProps(nextProps) {
//       if (this.props.pause != nextProps.pause) {
//         console.log('nextProps.pause', nextProps.pause);
//         if (nextProps.pause === true) {
//           this.onPause();
//         } else if (nextProps.pause === false) {
//           this.onResume();
//         }
//       }
//     }
//   }, {
//     key: 'componentWillMount',
//     value: function componentWillMount() {
//       this.start = this.getCurrentTime();
//       // console.warn(`[TimeTracker] starting time - `, this.start);
//       // add event listeners
//       document.addEventListener("pause", this.onPause, false);
//       document.addEventListener("resume", this.onResume, false);
//     }
//   }, {
//     key: 'render',
//     value: function render() {
//       return null;
//     }
//   }, {
//     key: 'componentWillUnmount',
//     value: function componentWillUnmount() {
//       // remove event listeners
//       document.removeEventListener("pause", this.onPause, false);
//       document.removeEventListener("resume", this.onResume, false);
//       this.end = this.getCurrentTime();
//       // console.warn(`[TimeTracker] end time - `, this.end);
//       this.calculateDiff();
//       if (this.props.onSave) {
//         this.props.onSave(this.total);
//       }
//     }
//   }, {
//     key: 'onPause',
//     value: function onPause() {
//       this.end = this.getCurrentTime();
//       // console.warn(`[TimeTracker] pausing time - `, this.end);
//       this.calculateDiff();
//       // console.warn(`[TimeTracker] pausing time TOTAL - `, this.total);
//     }
//   }, {
//     key: 'onResume',
//     value: function onResume() {
//       this.start = this.getCurrentTime();
//       console.warn(`[TimeTracker] resuming time - `, this.start);
//     }
//   }, {
//     key: 'calculateDiff',
//     value: function calculateDiff() {
//       this.total += this.end - this.start;
//       // console.warn(`[TimeTracker] total time - `, this.total);
//     }
//   }, {
//     key: 'getCurrentTime',
//     value: function getCurrentTime() {
//       if (typeof performance !== 'undefined') {
//         return performance.now();
//       }
//       return Date.now();
//     }
//   }]);

//   return TimeTracker;
// }(_react2.default.Component);

// export default TimeTracker;

const TrackTime = ({text}) =>{
    let timeArr = [];
    let totalTime = [];
    console.log(now())
    const time = ({text}) => {
        let start;
        let end;
        function getStart() {
            if ({ text } ==="_Play" || "_Resume"){
                start = now() ;      
            } else {
                start = start
            }
            console.log("start:", start)
        }
        function getEnd() {
            if ({ text } ==="_Stop" || "_Pause"){
                end = now() ;      
            }
            console.log("end:", end)
        }
        getStart()
        getEnd();            
        // ^^ These console log on the same time so they both trigger regardless for the button

        // ({text} === ("_Play"||"_Resume"))?{
        //     start: now(),
        // } : {
        //     start: start,
        //     end: now(),
        // }
        // console.log("start:", start);
        // console.log("end:", end)
        //  var timeEntry = end-start;
        //  console.log("time Entry is: ", timeEntry)

        // console.log("time spent: ", end-start)
        // let timeEntry = (end-start);
        // console.log(timeEntry);
        // return (timeEntry);
        // function getTimeEntry() {
        //     var timeEntry = end-start;
        // }
        // console.log(timeEntry)
        // getTimeEntry();
        // if ({text} === "_Play" || "_Resume"){
        //     var start = now()
        //     timeArr.push(start)
        //     console.log("TimeArr value: ", timeArr[0])
        // } else if ({text} === "_Stop" || "_Pause"){
        //     console.log("heyyyy ")
        //     var end = now();
        //     console.log("end: ", end)
        //     timeArr.push(end-start)
        //     console.log("TimeArr value at end: ", timeArr[1])
        // } else {
        //     console.log ("total time is: ", totalTime);
        // }
    }
    time({text});
    function msToTime(time) {
        var ms = time % 1000;
        time = (time - ms) / 1000;
        var secs = time % 60;
        time = (time - secs) / 60;
        var mins = time % 60;
        var hrs = (time - mins) / 60;
        var timeEntry = hrs + ':' + mins + ':' + secs + '.' + ms;
        return timeEntry;
      }

    // msToTime(time);
    totalTime.push(time);
    var totalTimeSum = totalTime.reduce((a,b) => a+b, 0);

    // console.log('milliseconds total time spent - send to DB : ', totalTimeSum);
    // console.log('milliseconds total time spent - client side : ', msToTime());
    // console.log(' total time : ', totalTime);
    // console.log(' what is time : ', time);

}

  export default TrackTime;