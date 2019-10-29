import React from "react";
import { Global, css } from "@emotion/core";
import Styles from "components/Shared/Styles";
import Lists from "components/Lists";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${Styles}
        `}
      />
      <div className="App">
        <Lists />
      </div>
    </>
  );
}

export default App;
