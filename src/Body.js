// body.js
import React from "react";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "Ini adalah tampilan Body pertamaku",
      subBody: "Ini adalah subBody pertamaku",
    };
  }

  // render
  render() {
    return (
      <div>
        <h1>{this.state.body}</h1>
        <h3>{this.state.subBody}</h3>
      </div>
    );
  }
}

export default Body;
