import React, { Component } from "react";
import styled from "styled-components";
import { Button, Col, Row } from "antd";

export default class HomePage extends Component {
  toDfs = () => {
    this.props.history.push("/dfs");
  };
  toMobx = () => {
    this.props.history.push("/mobx");
  };
  toNew = () => {
    this.props.history.push("/new");
  };
  render() {
    return (
      <Content>
        <div>
          <Row>
            <Col md ></Col>
          </Row>
          <Button size="large" type="primary" onClick={this.toDfs}>                                          
            深拷贝
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={this.toMobx}>
            mobx
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={this.toNew}>
            手撸一个new
          </Button>
        </div>
      </Content>
    );
  }
}

const Content = styled.div`
  padding: 20px;
  > div {
    margin-bottom: 10px;
  }
`;