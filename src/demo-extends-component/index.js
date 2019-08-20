import React, { Component } from "react";
import styled from "styled-components";
import BaseComponent from "../component/base-component";

export default class ExtendsDemo extends BaseComponent {
  componentDidMount = () => {
    this.aa({ a: "111" });
  };

  render() {
    return <Content />;
  }
}

const Content = styled.div`
  padding: 20px;
`;
