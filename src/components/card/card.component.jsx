import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, description, image } = this.props.food;
    return (
      <div className="card-list">
        <img src={image} alt="cherries" />
        <h3>{name}</h3>
        <p> {description}</p>
      </div>
    );
  }
}

export default Card;
