import React, { Component } from 'react';
// import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.filterRecipes = this.filterRecipes.bind(this);
  }
  filterRecipes(event) {
    const value = event.target.value;
    this.props.handleFilter(value);
  }
  render() {
    return <input onChange={this.filterRecipes} placeholder="Seach for a recipe" />;
  }
}

export default Search;
