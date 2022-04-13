const defalutState = {
  inputValue: 'rty',
  list: {
    a: '123',
    b: '456',
    c: '789',
  },
  WooApi: {},
};

const haha = (state = defalutState, action) => {
  const { type, value } = action;
  switch (type) {
    case 'change_input':
      return {
        ...state,
        inputValue: value,
      };
    case 'setWooApi':
      return {
        ...state,
        WooApi: {
          ...state.WooApi,
          ...value,
        },
      };
    default:
      break;
  }
  return state;
};

export default haha;
