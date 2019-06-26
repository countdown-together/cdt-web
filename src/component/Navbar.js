import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>

        <Link to="/misc/health">
          <Menu.Item
            name="health"
            active={activeItem === "health"}
            onClick={this.handleItemClick}
          >
            Health
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
