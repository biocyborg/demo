const defalutState = {
  inputValue1: 'rty',
  list1: {
    a: '123',
    b: '456',
    c: '789',
  },
};

const hahaha = (state = defalutState, action) => {
  console.log(action);
  const { type, value } = action;
  switch (type) {
    case 'change_input1':
      return {
        ...state,
        inputValue: value,
      };
    default:
      break;
  }
  return state;
};

export default hahaha;
