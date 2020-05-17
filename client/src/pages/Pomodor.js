import React from 'react';
import { Row } from "../components/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="timer">{this.props.time}:{this.props.seconds}</h1>
      </div>
    );
  }
}

class LongBreak extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col s4">
        <p>Long Break</p>
        <button type="button" className="btn button-pom" onClick={this.props.longBreak}>10 minutes</button>
      </div>
    );
  }
}

class Session extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col s4">
        <p>Session</p>
        <button type="button" className="btn button-pom" onClick={this.props.session}>25 minutes</button>
      </div>
    );
  }
}

class ShortBreak extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col s4">
        <p>Short Break</p>
        <button type="button" className="btn button-pom" onClick={this.props.shortBreak}>5 minutes</button>
      </div>
    );
  }
}

class StartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div style={{ marginRight: 5 }}>
      <button className="btn button-pom" onClick={this.props.startCountDown}>Start</button>
      // </div>
    );
  }
}

class StopButton extends React.Component {
  render() {
    return (
      // <div style={{ marginRight: 5, marginLeft: 30 }}>
      <button className="btn button-pom" onClick={this.props.stopCountDown}>Stop</button>
      // </div>
    );
  }
}

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 25,
      longBreakTime: 10,
      shortBreakTime: '05',
      seconds: '00',
    }
    // this.intervalHandle;
    // this.secondsRemaining;
    this.shortBreak = this.shortBreak.bind(this);
    this.longBreak = this.longBreak.bind(this);
    this.session = this.session.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      time: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }

    if (min < 10) {
      this.setState({
        time: "0" + min,
      })
    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.time;
    this.secondsRemaining = time * 60;
  }

  stopCountDown() {
    clearInterval(this.intervalHandle);
  }

  shortBreak() {
    this.setState({
      time: '05',
      seconds: '00'
    })
  }

  longBreak() {
    this.setState({
      time: 10,
      seconds: '00'
    })
  }

  session() {
    this.setState({
      time: 25,
      seconds: '00'
    })
  }

  render() {
    return (
      <div className="test">
        <div className="container">

          <div>

            <Row>
              <div className="col s-8 pull-s1 parent">
                <h5 className="time-quote" >"I discovered that you could learn how to improve your effectiveness and be better able to estimate how long..."<br />
            --Francesco Cirillo</h5>
                <img src="./images/phone.png" className="time-image responsive-img" alt="An image of a woman from behind, as she holds the reciever of a black office phone to her ear. The photo is composed of black and plum lines striped together to render the image." />
                <h1 className="time-child">Live for each moment</h1>
              </div>
            </Row>

            <Row>
              <Carousel>
                <div>
                  <h2> Instructions One Image </h2>
                  <p className="legend"> TEST ONE</p>
                </div>

                <div>
                  <h2> Instructions Two Image</h2>
                  <p className="legend"> TEST TWO</p>
                </div>

                <div>
                  <h2> Instructions Three Image </h2>
                  <p className="legend"> TEST THREE</p>
                </div>
              </Carousel>
            </Row>

            <div className="goal-list">

              <div className="row pom-pad">
                <div></div>
                <ShortBreak shortBreak={this.shortBreak} />
                <Session session={this.session} />
                <LongBreak longBreak={this.longBreak} />
              </div>
              <div className="row pom-pad">
                {/* <div className="col s4"></div> */}

                <div></div>
                <div className="col s4">
                  <StartButton startCountDown={this.startCountDown} />
                </div>
                <div className="col s4"><Timer time={this.state.time} seconds={this.state.seconds} /></div>
                <div className="col s4"> <StopButton stopCountDown={this.stopCountDown} /></div>
                {/* <div className="col s4"> <img src="./images/Pomodor.gif" className="gif" /> </div> */}
              </div>
              <div className="row">&nbsp;</div>
            </div>
            {/* <div className="row" style={{ paddingLeft: 100 }}>
              <div className="col s4"></div>
            </div> */}
          </div>
        </div>
      </div>

    );
  }
}

export default Pomodoro;