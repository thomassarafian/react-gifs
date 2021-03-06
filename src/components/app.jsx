import React, { Component } from 'react';
import giphy from 'giphy-api'

import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import SearchBar from './search_bar.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "3o72FcJmLzIdYJdmDe"
    }
    this.search("homer thinking");
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy("tQqeQN7whdyDBacO0PehOTO6eWZdlDQN").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif gifId={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;