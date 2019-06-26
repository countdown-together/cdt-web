import React, { Component } from "react";
import { health } from "../util/apiCalls";
import { Icon, Message } from "semantic-ui-react";
import PropTypes from "prop-types";

class Health extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Connecting...",
      icon: <Icon name="circle notched" loading />
    };
  }

  componentWillMount() {
    health(this.props.endpoint, this.props.path)
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
    let statusField;
    if (this.props.tag) {
      statusField = (
        <span id={this.props.tag + "-health-indicator"}>
          status: {this.state.status}
        </span>
      );
    } else {
      statusField = <span>status: {this.state.status}</span>;
    }
    return (
      <Message icon>
        {this.state.icon}
        <Message.Content>
          <Message.Header>{this.props.header}</Message.Header>
          {statusField}
        </Message.Content>
      </Message>
    );
  }
}

Health.propTypes = {
  path: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  tag: PropTypes.string
};

export default Health;
