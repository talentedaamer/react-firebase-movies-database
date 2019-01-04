import React, { Component } from "react";

import firebase from "../../database/firebase";

import { Pane } from "evergreen-ui";
import Loader from "./utilities/Loader";
import SingleMovieItem from "./SingleMovieItem";

class SingleMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      key: "",
      movie: {}
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("movies")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          movie: doc.data(),
          key: doc.id,
          loading: false
        });
      } else {
        console.log("No movies found!");
      }
    });
  }

  render() {
    const { key, loading, movie } = this.state;

    let renderMovie;
    if (loading) {
      renderMovie = <Loader />;
    } else {
      renderMovie = <SingleMovieItem key={key} movie={movie} />;
    }

    return (
      <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
        {renderMovie}
      </Pane>
    );
  }
}

export default SingleMovie;
