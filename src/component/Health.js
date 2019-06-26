import React, { Component } from "react";
import { health } from "../util/apiCalls";
import { Icon, Message } from "semantic-ui-react";

class Health extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Connecting...",
      icon: <Icon name="circle notched" loading />
    };
  }

  componentWillMount() {
    health()
      .then(response => {
        this.setState({
          status: response.status,
          icon: <Icon name="heart" color="green" />
        });
      })
      .catch(err => {
        this.setState({
          status: "Connection cannot be established.",
          icon: <Icon name="heart" color="red" />
        });
      });
  }

  render() {
    return (
      <Message icon>
        {this.state.icon}
        <Message.Content>
          <Message.Header>Backend API connection</Message.Header>
          {this.state.status}
        </Message.Content>
      </Message>
    );
  }
}

export default Health;
