import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="health"
          active={activeItem === "health"}
          onClick={this.handleItemClick}
        >
          Health
        </Menu.Item>
      </Menu>
    );
  }
}
