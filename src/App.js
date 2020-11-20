
import React from "react";
import Main from "./components/Mainx";
import Wrapper from "./components/Wrapper";
import Header from "./components/employeeHeader";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;