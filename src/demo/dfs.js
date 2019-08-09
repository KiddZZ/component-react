import React, { Component } from "react";

export default class DfsBfs extends Component {
  componentDidMount = () => {
    const node = document.getElementsByClassName("parent")[0];
    console.log(this.dfs(node));
    console.log(this.bfs(node));
  };

  dfs = (node, nodeList = []) => {
    if (node !== null) {
      nodeList.push(node);
      let children = node.children;
      for (let i = 0; i < children.length; i++) {
        this.dfs(children[i], nodeList);
      }
    }
    return nodeList;
  };

  bfs = node => {
    let nodes = [];
    let stack = [];
    if (node) {
      stack.push(node);
      while (stack.length) {
        let item = stack.shift();
        let children = item.children;
        nodes.push(item);
        // 队列，先进先出
        // nodes = [] stack = [parent]
        // nodes = [parent] stack = [child1,child2,child3]
        // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
        // nodes = [parent,child1,child2]
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
    }
    return nodes;
  };

  render() {
    return (
      // react
      <div className="parent">
        <div className="child-1">
          <div className="child-1-1">
            <div className="child-1-1-1">1</div>
          </div>
          <div className="child-1-2">
            <div className="child-1-2-1">2</div>
          </div>
        </div>
        <div className="child-2">
          <div className="child-2-1">3</div>
          <div className="child-2-2">
            <div className="child-2-2-1">4</div>
          </div>
        </div>
      </div>
    );
  }
}
