import React, { Component } from 'react';
import { Row } from "../Grid";
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class SongSelector extends Component {

  render() {
    let status = this.props.playStatus == "PLAYING";
    let songArray = this.props.songs;
    let options = songArray.map((song, index) =>
      <button key={index} value={index} className="waves-effect waves-light btn btn-small button pink accent-3">
        {song.title}
      </button>
    );

    return (
      <Transition in={!status} timeout={duration}>

        {state => (
          <div >
            {/* I'm a fade Transition! */}
            <div style={status ? { display: "none" } : { display: "block" }, {
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <Row>
                <div className="col s-8 pull-s1 parent">
                  <h5 className="quote" >"Meditation brings many benefits: It refreshes us, helps us settle into what’s happening now, makes us wiser and gentler, helps us cope in a world that overloads us with information and communication, and more."<br />--Gayathri Sooraj</h5>
                  <img src="./images/soul1.png" className="soul-image responsive-img" alt="A person stands against a wall in a one legged yoga pose, hands folded together in front of them. Their chin is uplifted, and they look content. The photo is composed of black and teal lines striped together to render the image." />
                  <h1 className="child">My Soul</h1>
                </div>
              </Row>

              <Row>
                <div className="col s-8 pull-s1">
                  <p>We couldn't think of this application as complete without having a tool to help you "reset". Resetting yourself is as important and helpful as checking a todo off of your list.</p>
                  <p>Take 3-5 minutes to allow your breathing to slow in time with the bubble, letting your thoughts drift by quietly, and your mind and soul a chance to rest.</p>
                </div>
              </Row>

              <Row>
                <div>
                  <p id="boldP">Choose your meditation soundtrack, and keep your breath in time with the bubble:</p>
                </div>
                <div>
                  <div value={this.props.songs.indexOf(this.props.selectedSong)} onClick={this.handleSongChange.bind(this)} id="songOptions">
                    {options}
                  </div>
                </div>
              </Row>

            </div>
          </div>
        )
        }
      </Transition>
    );
  }

  handleSongChange(ev) {
    this.props.onSongSelected(this.props.songs[ev.target.value]);
  }
}

export default SongSelector;