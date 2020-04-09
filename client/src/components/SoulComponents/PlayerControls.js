import React, { Component } from 'react';
import Sound from 'react-sound';
import { Row } from "../Grid";

const control = (text, clickHandler) => {
  const onClick = ev => {
    ev.preventDefault();
    clickHandler();
  };
  return (


    <Row>
      <button>
        <a href="#" onClick={onClick}>
          {text}
        </a>
      </button>
    </Row>
  );
}

class PlayerControls extends Component {

  render() {
    return <div>{this.renderControls()}</div>;
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
        <div>
          <ul>
            {controls.play && control('Play', this.props.onPlay)}
            {controls.stop && control('Stop', this.props.onStop)}
            {controls.pause && control('Pause', this.props.onPause)}
            {controls.resume && control('Resume', this.props.onResume)}
          </ul>

          {/* Loop?:
        <input type="checkbox" checked={this.props.loop} onChange={this.props.onToggleLoop} /> */}
        </div>
      </Row>


    );
  }
}

export default PlayerControls;