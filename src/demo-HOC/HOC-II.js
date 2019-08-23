import React from "react";

const HOC = TargetComponnet => {
  return class HOCII extends TargetComponnet {
    componentDidMount() {
      console.log(this);
    }
    render() {
      const elementsTree = super.render();
      console.log(elementsTree);
      let newProps = {};
      if (elementsTree && elementsTree.type === "input") {
        newProps = {
          value: "may the force be with you",
          style: { marginLeft: 50, marginTop: 50 }
        };
      }
      const newElementsTree = React.cloneElement(
        elementsTree,
        { ...elementsTree.props, ...newProps },
        elementsTree.props.children
      );
      return newElementsTree;
    }
  };
};

export default HOC;
