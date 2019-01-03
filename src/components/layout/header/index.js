import React, { Component } from "react";

// evergreen ui components
import { Pane } from "evergreen-ui";

import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";

class Header extends Component {
  render() {
    const title = "Firebase Movies Database";

    return (
      <Pane
        background="yellowTint"
        padding={24}
        maxWidth={800}
        margin={"auto"}
        display="flex"
      >
        <HeaderTitle title={title} />
        <HeaderMenu />
      </Pane>
    );
  }
}

export default Header;
