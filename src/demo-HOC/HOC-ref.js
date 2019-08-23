import React, { Component } from "react";

const HOC = TargetComponnet => {
  return class RefHOC extends Component {
    componentDidMount = () => {
      this.target.init();
      console.log(this.target)
    };
    render() {
      return <TargetComponnet {...this.props} ref={e => (this.target = e)} />;
    }
  };
};

export default HOC;
