import React, { Component } from "react";

import { Pane } from "evergreen-ui";
import Loader from "../Loader";

class SingleMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      key: "",
      movie: {}
    };
  }

  render() {
    const { loading } = this.state;

    let renderMovie;
    if (loading) {
      renderMovie = <Loader />;
    } else {
      renderMovie = "movies";
    }

    return (
      <Pane background="yellowTint" padding={24} maxWidth={800} margin={"auto"}>
        {renderMovie}
      </Pane>
    );
  }
}

export default SingleMovie;
