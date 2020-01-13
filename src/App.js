import React from "react";
import Header from "./components/Header/index";
import "./css/styleGlobal.css";
// import Main from "./pages/main";
import Routes from "./router";

const App = () => (
  <div>
    <Header></Header>
    <Routes />
  </div>
);

export default App;
