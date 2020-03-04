import React, { Component } from 'react';
import './App.scss';
import MealBox from './components/MealBox';
import Search from './components/Search';

import meals from './meals.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      name: '',
      calories: '',
      image: '',
      active: false,
      // save the search value in the state
      search: ''
    };
    this.addRecipe = this.addRecipe.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.toggleAddRecipe = this.toggleAddRecipe.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  addRecipe(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    const mealsCopy = [...this.state.meals, data];
    this.setState({
      meals: mealsCopy,
      active: false
    });
  }
  changeInputHandler(event) {
    event.preventDefault();
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }
  toggleAddRecipe() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }
  handleFilter(value) {
    this.setState({
      search: value
    });
  }
  render() {
    return (
      <div>
        <h3>Meals</h3>

        <div className="searchSection">
          <Search meals={this.state.meals} handleFilter={this.handleFilter} />
          <button onClick={this.toggleAddRecipe}>Insert new recipe</button>

          {this.state.active && (
            <form onSubmit={this.addRecipe} className="newRecipeForm">
              <input
                name="name"
                value={this.state.name}
                placeholder="Recipe Name"
                onChange={this.changeInputHandler}
              />
              <input
                name="calories"
                value={this.state.calories}
                placeholder="Calories"
                onChange={this.changeInputHandler}
              />
              <input
                name="image"
                value={this.state.image}
                placeholder="Image URL"
                onChange={this.changeInputHandler}
              />
              <button>Add Recipe</button>
            </form>
          )}
        </div>
        {this.state.meals.map(meal => {
          console.log(meal.name.toLowerCase(), this.state.search);
          if (meal.name.toLowerCase().match(this.state.search)) {
            return (
              <MealBox
                name={meal.name}
                key={meal.name}
                image={meal.image}
                cal={meal.calories}
                quantity={meal.quantity}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default App;
