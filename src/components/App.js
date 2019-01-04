import React, { Component } from "react";

// evergreen ui components
import { Pane } from "evergreen-ui";

import firebase from "../database/firebase";
import MoviesTable from "./movies/show/MoviesTable";
import Loader from "./utilities/Loader";

class App extends Component {
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection("movies");
    this.unsubscribe = null;
    this.state = {
      loading: true,
      moviesList: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const moviesList = [];
    querySnapshot.forEach(doc => {
      const { description, director, name, stars, type } = doc.data();
      moviesList.push({
        key: doc.id,
        description,
        director,
        name,
        stars,
        type
      });
    });
    this.setState({
      loading: false,
      moviesList
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { loading, moviesList } = this.state;

    let ShowTable;
    if (loading) {
      ShowTable = <Loader />;
    } else {
      ShowTable = <MoviesTable moviesList={moviesList} />;
    }

    return (
      <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
        {ShowTable}
      </Pane>
    );
  }
}

export default App;
