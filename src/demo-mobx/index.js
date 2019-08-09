import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./view/counter";

export default class MobxDemo extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <Content>
        <Counter />
      </Content>
    );
  }
}

const Content = styled.div`
  padding: 20px;
`;
