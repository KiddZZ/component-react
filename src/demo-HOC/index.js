import React, { Component } from "react";
// import HOCref from "./HOC-ref";
// import HOCstate from "./HOC-state";
import HOCII from "./HOC-II";

// @HOC
class HOCDemo extends Component {
  state = {
    name: "HOCDemo"
  };

  componentDidMount() {
    console.log(this.state);
  }

  init = () => {
    console.log("demo");
  };

  render() {
    return <input />;
  }
}

// export default HOC(HOCDemo);
export default HOCII(HOCDemo);
