import React, { Component } from "react";

import { Pane, Spinner } from "evergreen-ui";

class Loader extends Component {
  render() {
    return (
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Spinner size={24} />
      </Pane>
    );
  }
}

export default Loader;
