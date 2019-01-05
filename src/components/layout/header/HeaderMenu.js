import React, { Component } from "react";

import { Link } from "react-router-dom";
// evergreen ui components
import { Pane, Button } from "evergreen-ui";

class HeaderMenu extends Component {
  render() {
    return (
      <Pane>
          <Link to="/create/">
          <Button iconBefore="add" height={28}>
              Add Movie
          </Button>
          </Link>
      </Pane>
    );
  }
}

export default HeaderMenu;
