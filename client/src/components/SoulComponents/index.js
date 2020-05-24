import React, { Component } from 'react';
import TimeTracker from './TimeTrack';
import Sound from 'react-sound';
import PlayerControls from './PlayerControls';
import SongSelector from './SongSelector';
import Breathing from "./Breathing";

import songs from './songs';
import { Col, Row, Container } from "../Grid";

class SoulComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlled: true,
      currentSong: songs[0],
      position: 0,
      playStatus: Sound.status.STOPPED,
      pause: true
    };
  };

  // is passed song, sets it to currentSong
  // could change to a hook for currentSong, setCurrentSong
  handleSongSelected = (song) => {
    this.setState({ currentSong: song, position: 0 });
  }

  handleControlledComponentChange = (ev) => {
    this.setState({
      controlled: ev.target.checked,
      position: 0
    });
  }

// function TrackTime(){

// }


  render() {
    return (
      <Container>
      
        <SongSelector
          songs={songs}
          selectedSong={this.state.currentSong}
          onSongSelected={this.handleSongSelected}
          playStatus={this.state.playStatus}
        />

        <Row>
          <Col size="md-12">
            <Breathing
              playStatus={this.state.playStatus} />
          </Col>
        </Row>

        <PlayerControls
          playStatus={this.state.playStatus}
          onPlay={() => this.setState({ playStatus: Sound.status.PLAYING, pause: false })}
          onPause={() => this.setState({ playStatus: Sound.status.PAUSED, pause: true })}
          onResume={() => this.setState({ playStatus: Sound.status.PLAYING, pause: false })}
          onStop={() => this.setState({ playStatus: Sound.status.STOPPED, position: 0, pause: true })}
          position={this.state.position}

        />
        {/* <TimeTracker 
        // onPlay={() => this.setState({ pause:false , onSave:this.onSave })}
        onPlay={() => this.start()}
         /> */}

        {this.state.currentSong && (
          this.state.controlled ? (
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              position={this.state.position}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => this.setState({ position })}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
          ) : (
              <Sound
                url={this.state.currentSong.url}
                playStatus={this.state.playStatus}
                playFromPosition={this.state.position}
                onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
                onLoad={() => console.log('Loaded')}
                onPlaying={({ position }) => console.log('Position', position)}
                onPause={() => console.log('Paused')}
                onResume={() => console.log('Resumed')}
                onStop={() => console.log('Stopped')}
                onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
              />
            )
            )}
      
      </Container>
    );
  }
      // onSave(totalTime){
      //   // e.g. store time in database
      //   console.log('total time spent: ', totalTime)
      // }
}

export default SoulComponent;