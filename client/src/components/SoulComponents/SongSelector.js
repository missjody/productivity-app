import React, { Component } from 'react';
import { Row } from "../Grid";
import { Transition } from 'react-transition-group';
import xsmall from "./xsmall.png";
import small from "./small.png";
import medium from "./medium.png";
import large from "./large.png";
import xlarge from "./xlarge.png";

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
      <button key={index} value={index} className="waves-effect waves-light btn btn-small button white">
        {song.title}
      </button>
    );

    return (
      <Transition in={!status} timeout={duration} >

        {state => (
          <div >
            {/* I'm a fade Transition! */}
            <div style={status ? { display: "none" } : { display: "block" }, {
              ...defaultStyle,
              ...transitionStyles[state]
            }}>

            <div >
              {/* commented out 11/19 919a */}
              <img
             className="responsive-img"
                // id="soulImage"
                sizes="(max-width: 100vw) 100vw"
                srcset={`${xsmall} 190w,
            ${small} 879w,
            ${medium} 1308w,
            ${large} 1703w,
            ${xlarge} 2600w`}
                src="yellowmeditate_cxfljk_c_scale,w_2600.png"
                alt="An image of a womans hands resting on a computer keyboard. The photo is composed of black and yellow lines striped together to render the image." />
              <h1 className="child hide-on-med-and-down">My Soul</h1>
              </div>

              <div className="container">
                <Row>
                  <div className="col s12 m2"></div>
                  <div className="col s12 m8">
                    <h4>We couldn't think of this application as complete without having a tool to help you "reset". Resetting yourself is as important and helpful as checking a todo off of your list.</h4>
                    <h4>Take 3-5 minutes to allow your breathing to slow in time with the bubble, letting your thoughts drift by quietly, and your mind and soul a chance to rest.</h4>
                  </div>
                  <div className="col s12 m2">test</div>
                </Row>

                <Row>
                  <div>
                    <h5 id="boldP">Choose your meditation soundtrack, </h5>
                    <h5 id="boldP">and keep your breath in time with the bubble:</h5>
                  </div>
                  <div>
                    <div value={this.props.songs.indexOf(this.props.selectedSong)} onClick={this.handleSongChange.bind(this)} id="songOptions">
                      {options}
                    </div>
                  </div>
                </Row>

              </div>
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