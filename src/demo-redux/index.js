import React, { Component } from "react";
import styled from "styled-components";
import CreateLogic from "./logic/create-logic";
import { getInitState, actions } from "./logic/main-logic";
import { Button } from "antd";

class ReduxDemo extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    const { number, count, onIncreaseClick, setNumber } = this.props;
    console.log(this.props);
    return (
      <Content>
        <p>count:{count}</p>
        <p>number:{number}</p>
        <Button onClick={() => onIncreaseClick(1)}>click</Button>
        <Button onClick={() => setNumber(1,2)}>setNumber</Button>
      </Content>
    );
  }
}

const Content = styled.div`
  padding: 20px;
`;

export default CreateLogic({ getInitState, actions })(ReduxDemo);
