const defalutState = {
  inputValue: 'rty',
  list: {
    a: '123',
    b: '456',
    c: '789',
  },
};

const haha = (state = defalutState, action) => {
  console.log(action);
  const { type, value } = action;
  switch (type) {
    case 'change_input':
      return {
        ...state,
        inputValue: value,
      };
    default:
      break;
  }
  return state;
};

export default haha;
