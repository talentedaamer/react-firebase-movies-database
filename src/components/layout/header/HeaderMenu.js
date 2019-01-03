import React, { Component } from "react";

import { Link } from "react-router-dom";
// evergreen ui components
import { Pane, Button, Popover, Menu, Position } from "evergreen-ui";

class HeaderMenu extends Component {
  render() {
    return (
      <Pane>
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item icon="add" intent="secondary">
                  <Link to="/create/">Add New Movie</Link>
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <Button appearance="primary" iconBefore="menu">
            Menu
          </Button>
        </Popover>
      </Pane>
    );
  }
}

export default HeaderMenu;
