import React, { Component } from "react";

export default class BaseComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  aa = query => {
    console.log(query);
    console.log(this.props);
  };
}
