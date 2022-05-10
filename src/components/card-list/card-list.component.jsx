import { Component } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { foodItems } = this.props;
    return (
      <div className="card-container">
        {foodItems.map((item) => (
          <Card food={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
