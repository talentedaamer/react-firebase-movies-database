import React, { Component } from "react";

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
                  Add New Movie
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
