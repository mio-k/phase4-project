import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 5;
  padding: 10;
  box-sizing: border-box;
}
  body {
    font-family: "Playfair Display", sans-serif;
    font-size: 14px;
    padding: 1rem;
  }
  a {
    color:rgb(81, 82, 113)
  }
  a:visited{
    color:rgb(81, 82, 113)
  }
  a:hover{
    color:#147e9b
  }
  a.active{
    font-weight: bold;
  }
  a.nav {
    color:rgb(252, 249, 249)
  }
  a.nav.hover,
  a.nav.active {
    color: whitesmoke;
    font-weight: bold;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
