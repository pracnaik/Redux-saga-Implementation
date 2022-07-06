import {  put, takeEvery  } from 'redux-saga/effects'

function* fetchUser(action) {
  console.log('IN USER_FETCH', action);
   try {
      yield put({type: "USER_FETCH_SUCCEEDED", payload: action.payload});
   } catch (e) {
    console.log("saga", e);
   }
}

function* clear(){
  yield put({type:'CLEAR'})
}

function* mySaga() {
  console.log('my saga');
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery("CLEAR_REQUEST", clear);
}



export default mySaga;