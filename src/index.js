import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./components/App";
import Edit from "./components/Edit";
import Create from "./components/Create";
import SingleMovie from "./components/movies/SingleMovie";
import Header from "./components/layout/header";

ReactDOM.render(
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/movie/:id" component={SingleMovie} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
    </div>
  </Router>,
  document.getElementById("root")
);
