import { takeEvery, put } from 'redux-saga/effects';

function* mySaga() {
  yield takeEvery('getMyList', getList);
}

function* getList(action) {
  yield put({
    type: 'change_input',
    value: action.data,
  });
}

// type
// payload
// callback

export default mySaga;
