import { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, searchText } = this.props;
    return (
      <section className="search-box">
        <input
          type="text"
          placeholder={`${searchText}`}
          className="search-field"
          onChange={onChangeHandler}
        />
      </section>
    );
  }
}

export default SearchBox;
