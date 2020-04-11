import React, { Component } from 'react';

class SongSelector extends Component {

  render() {
    let status = this.props.playStatus == "PLAYING";

    let songArray = this.props.songs;
    let options = songArray.map((song, index) =>
      <button key={index} value={index} className="waves-effect waves-light btn-small button">
        {song.title}
      </button>
    );
    return (
      <div style={status ? { display: "none" } : { display: "block" }}>
        <h3> My Soul </h3>
        <h5>Gayathri Sooraj says, "Meditation brings many benefits: It refreshes us, helps us settle into what’s happening now, makes us wiser and gentler, helps us cope in a world that overloads us with information and communication, and more."</h5>
        <hr />
        <p>We couldn't think of this application as complete without having a tool to help you "reset". Resetting yourself is as important and helpful as checking a todo off of your list.</p>
        <p>Take 3-5 minutes to allow your breathing to slow in time with the bubble, letting your thoughts drift by quietly, and your mind and soul a chance to rest.</p>
        <p className="boldP">Choose your meditation soundtrack, and keep your breath in time with the bubble:</p>
        <div value={this.props.songs.indexOf(this.props.selectedSong)} onClick={this.handleSongChange.bind(this)} className="songOptions">
          {options}
        </div>
      </div>
    );
  }

  handleSongChange(ev) {
    this.props.onSongSelected(this.props.songs[ev.target.value]);
  }
}

export default SongSelector;