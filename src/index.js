import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./components/App";
import EditMovie from "./components/movies/edit";
import CreateMovie from "./components/movies/create";
import SingleMovie from "./components/movies/SingleMovie";
import Header from "./components/layout/header";

ReactDOM.render(
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/movie/:id" component={SingleMovie} />
      <Route path="/edit/:id" component={EditMovie} />
      <Route path="/create" component={CreateMovie} />
    </div>
  </Router>,
  document.getElementById("root")
);
