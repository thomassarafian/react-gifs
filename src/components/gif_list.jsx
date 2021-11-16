import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component {
  renderGifList = () => {
    return this.props.gifs.map(gif => <Gif className="gif" gifId={gif.id} key={gif.id} selectGif={this.props.selectGif} />)
  }
  
  render () {
    return (
      <div className="gif-list">
        {this.renderGifList()}
      </div>
    )
  }
}

export default GifList;