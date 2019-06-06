import React from "react";
import ReactDOM from "react-dom";

import Main from "./Main/index";

import Styles from "./index.styles";

function App() {
  return (
    <Styles.Container>
      <header></header>
      <Main></Main>
      <footer></footer>
    </Styles.Container>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));