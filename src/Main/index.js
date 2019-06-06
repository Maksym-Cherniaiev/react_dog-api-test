import React, { Component } from "react";

import RenderCard from "./Card";

import Styles from "./index.styles";

class Main extends Component {
  constructor() {
    super();
    this.numberOfCards = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.render();
  }

  DefineCard() {
    const cards = this.numberOfCards.map((num) => {
      return (
        <RenderCard key = { num }/>
      );
    });
    return cards;
  }

  render() {
    return (
      <Styles.Main>
         { this.DefineCard() }
      </Styles.Main>
    );
  }
}

export default Main;