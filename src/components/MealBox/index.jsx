import React, { Component } from 'react';
import './style.scss';

class MealBox extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    // value precisa ser adicionado manualmente e depois usa esse value pra add o item ao lado direito
    this.setState(previousState => ({
      quantity: previousState.quantity + 1
    }));
  }

  render() {
    return (
      <div key="this.props.key" className="media">
        <img
          src={this.props.image}
          className="img-thumbnail mr-3 mw-25 border-0 align-self-center ml-1"
          alt="ss"
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.cal} cal</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value={this.state.quantity} />
          <button onClick={this.addItem} className="btn btn-primary col-3">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default MealBox;
