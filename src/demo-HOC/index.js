import React, { Component } from "react";
import styled from "styled-components";
import HOC from "./HOC";

@HOC
export default class HOCDemo extends Component {
  state = {
    name: "HOCDemo"
  };

  componentDidMount = () => {};

  init = () => {
    console.log("demo");
  };

  render() {
    return <Content />;
  }
}

const Content = styled.div`
  padding: 20px;
`;
