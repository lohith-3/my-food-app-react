import { Component } from "react";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component.jsx";
import CardList from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      foodItems: [
        {
          id: 1,
          name: "Cherries",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/cherries.jpg"),
        },
        {
          id: 2,
          name: "Croissant",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/croissant.jpg"),
        },
        {
          id: 3,
          name: "Popsicle",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/popsicle.jpg"),
        },
        {
          id: 4,
          name: "Salmon",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/salmon.jpg"),
        },
        {
          id: 5,
          name: "Sandwich",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/sandwich.jpg"),
        },
        {
          id: 6,
          name: "Steak",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/steak.jpg"),
        },
        {
          id: 7,
          name: "Wine",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/wine.jpg"),
        },
        {
          id: 8,
          name: "Croissant",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/croissant.jpg"),
        },
        {
          id: 9,
          name: "Steak",
          description:
            "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
          image: require("../src/images/steak.jpg"),
        },
      ],
    };
  }

  onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value });
    this.setState(
      () => {
        return { searchField: event.target.value };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  render() {
    const { onSearchChange } = this;
    const { foodItems, searchField } = this.state;

    const filteredFoodItems = foodItems.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="food-container">
        <h1 className="app-title">My Food Items</h1>
        <SearchBox onChangeHandler={onSearchChange} searchText="Search Food" />
        <CardList foodItems={filteredFoodItems} />
      </div>
    );
  }
}

export default App;
