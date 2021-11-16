import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const handleChange = (event) => {
      this.props.searchFunction(event.target.value)
    }
    return (
      <input className="form-control form-search" type="text" onChange={handleChange} />
    );
  }
}

export default SearchBar;