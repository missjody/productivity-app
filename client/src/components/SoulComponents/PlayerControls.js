import React, { Component } from 'react';
import Sound from 'react-sound';
import { Row } from "../Grid";

const control = (text, clickHandler) => {
  const onClick = ev => {
    ev.preventDefault();
    clickHandler();
  };

  return (
    <button className="waves-effect waves-light btn-small button">
      <a href="#" onClick={onClick}>
        <p className="dynamic">{text}</p>
      </a>
    </button>
  );
}


class PlayerControls extends Component {

  render() {
    return (<div>{this.renderControls()}</div>);
  }



  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      stop: this.props.playStatus !== Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };

    return (


      <Row>
        <div className="buttton-parent">
          <ul className="button-child">
            {controls.play && control('Play', this.props.onPlay)}
            {controls.stop && control('Stop', this.props.onStop)}
            {controls.pause && control('Pause', this.props.onPause)}
            {controls.resume && control('Resume', this.props.onResume)}
          </ul>
        </div>
      </Row>


    );
  }
}

export default PlayerControls;