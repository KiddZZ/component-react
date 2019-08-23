import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

const HOC = ({ getInitState, actions }) => TargetComponnet => {
  // Reducer
  const actionFuncs = actions() || {};
  function counter(state = getInitState(), action) {
    const { type, ...rest } = action;
    if (actionFuncs[type]) {
      return actionFuncs[type](state, { payload: { ...rest } });
    } else {
      return { ...state };
    }
  }

  // Store
  const store = createStore(counter);

  // 处理actions
  const actionList = dispatch => {
    let obj = {};
    Object.keys(actionFuncs).map(key => {
      obj[key] = (...args) => dispatch({ type: key, ...args });
    });
    return obj;
  };

  const mapStateToProps = state => {
    return { ...getInitState(), ...state };
  };

  const App = connect(
    mapStateToProps,
    actionList
  )(TargetComponnet);
  return class CreateLogic extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  };
};

export default HOC;
