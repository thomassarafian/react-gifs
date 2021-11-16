import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.gifId);
    }
  }
  render() {
    const src = `https://i.giphy.com/media/${this.props.gifId}/200w.gif`;
    return (
      <img className="gif" src={src} onClick={this.handleClick} />
    )
  }
}

export default Gif;