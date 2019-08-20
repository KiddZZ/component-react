import React, { Component } from "react";

const HOC = TargetComponnet => {
  return class RefHOC extends Component {
    componentDidMount = () => {
      this.target.init();
    };
    render() {
      return <TargetComponnet {...this.props} ref={e => (this.target = e)} />;
    }
  };
};

export default HOC;
