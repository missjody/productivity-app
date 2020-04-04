import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100 }}>{this.props.time}:{this.props.seconds}</h1>
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
        <button type="button" className="btn" onClick={this.props.longBreak}>10 minutes</button>
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
        <button type="button" className="btn" onClick={this.props.session}>25 minutes</button>
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
        <button type="button" className="btn" onClick={this.props.shortBreak}>5 minutes</button>
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
      <div style={{ marginRight: 5 }}>
        <button className="btn" onClick={this.props.startCountDown}>Start</button>
      </div>
    );
  }
}

class StopButton extends React.Component {
  render() {
    return (
      <div style={{ marginRight: 5, marginLeft: 30 }}>
        <button className="btn" onClick={this.props.stopCountDown}>Stop</button>
      </div>
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
      <div>
        <div className="row" style={{ paddingTop: 100, paddingLeft: 100 }}>
          <div></div>
          <ShortBreak shortBreak={this.shortBreak} />
          <Session session={this.session} />
          <LongBreak longBreak={this.longBreak} />
        </div>
        <div className="row" style={{ paddingLeft: 50 }}>
          <div className="col s4"></div>
          <div className="col s4">
            <Timer time={this.state.time} seconds={this.state.seconds} />
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row" style={{ paddingLeft: 100 }}>
          <div className="col s4"></div>
          <StopButton stopCountDown={this.stopCountDown} />
          <StartButton startCountDown={this.startCountDown} />
        </div>
      </div>
    );
  }
}

export default Pomodoro;