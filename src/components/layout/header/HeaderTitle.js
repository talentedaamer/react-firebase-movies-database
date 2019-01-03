import React, { Component } from "react";

// evergreen ui components
import { Pane, Heading } from "evergreen-ui";

class HeaderTitle extends Component {
  render() {
    const { title } = this.props;

    return (
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>{title}</Heading>
      </Pane>
    );
  }
}

export default HeaderTitle;
