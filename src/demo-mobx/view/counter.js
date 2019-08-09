import React, { Component } from "react";
import styled from "styled-components";
import { Button, Icon } from "antd";

export default class CounterMobx extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <Content>
          
        <Button.Group>
          <Button>-</Button>
          <Button disabled>0</Button>
          <Button>+</Button>
        </Button.Group>
      </Content>
    );
  }
}

const Content = styled.div`
  padding: 20px;
`;
