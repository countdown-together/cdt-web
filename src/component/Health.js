import React, { Component } from "react";
import { health } from "../util/apiCalls";

class Health extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "not-available"
    };
  }

  componentWillMount() {
    health()
      .then(response => {
        this.setState({ status: response.status });
      })
      .catch(err => {
        this.setState({ status: "failed to ask" });
      });
  }

  render() {
    return <div id="health-indicator">status: {this.state.status}</div>;
  }
}

export default Health;
