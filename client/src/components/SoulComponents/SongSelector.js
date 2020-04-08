import React, { Component } from 'react';
// import { Col } from "../Grid";

class SongSelector extends Component {
  render() {
    let songArray = this.props.songs;
    console.log("songArray", this.props.songs)
    let options = songArray.map((song, index) =>
      <button key={index} value={index}>
        {song.title}
      </button>
    );
    console.log("Options", options)

    return (
      // <label>
      //   Choose your meditation soundtrack: {' '}
      //   <select value={this.props.songs.indexOf(this.props.selectedSong)} onChange={this.handleSongChange.bind(this)}>
      //     <option />
      //     {this.renderSongOptions()}
      //   </select>
      // </label>

      //   <div class="input-field col s12">
      //   <select>
      //     <option value="" disabled selected>Choose your option</option>
      //     <option value="1">Option 1</option>
      //     <option value="2">Option 2</option>
      //     <option value="3">Option 3</option>
      //   </select>
      //   <label>Materialize Select</label>
      // </div>

      // <div>
      //   <label>Choose your meditation soundtrack:</label>
      //   <select value={this.props.songs.indexOf(this.props.selectedSong)} onChange={this.handleSongChange.bind(this)}>
      //     {/* {this.renderSongOptions()} */}
      //     {options}
      //   </select>
      // </div>

      // trying them as all separate buttons
      <div>
        <h3> My Soul </h3>
        <h5> Nice little description of what this app does once we get it doing what we actually want it to. Namaste, Bombers</h5>
        <p>Choose your meditation soundtrack:</p>
        <div value={this.props.songs.indexOf(this.props.selectedSong)} onClick={this.handleSongChange.bind(this)}>
          {options}
        </div>
      </div>
    );
  }

  // renderSongOptions() {
  //   return this.props.songs.map((song, index) => {
  //     console.log("Song", song)
  //     console.log("Index", index)
  //     return (
  //       <option key={index} value={index}>
  //         {song.title}
  //       </option>
  //     );
  //   });
  // }

  handleSongChange(ev) {
    this.props.onSongSelected(this.props.songs[ev.target.value]);
  }
}

export default SongSelector;