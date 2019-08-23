// Map Redux state to component props
export const getInitState = () => {
  return {
    count: 0,
    number: 222
  };
};

// Map Redux actions to component props
export function actions() {
  return {
    onIncreaseClick,
    setNumber
  };
}
const onIncreaseClick = state => {
  return {
    ...state,
    count: state.count + 1
  };
};
const setNumber = (state, { payload }) => {
  return {
    ...state,
    number: payload[0] + payload[1]
  };
};
