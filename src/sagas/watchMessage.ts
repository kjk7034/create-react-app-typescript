import { call, fork, put, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../actions/ActionTypes'
import * as messageApi from '../api/message'

function* getMessageList() {
  yield put({ type: ActionTypes.HTTP_CALL_STARTED })
  // Create a Request
  const { response, error } = yield call(messageApi.getMessage)
  if (response) {
    // SUCCEED
    const newData = response.data.map((v: any) => {
      return {
        userId: v.userId,
        id: v.id,
        title: v.title
      }
    })

    yield put({
      type: ActionTypes.GET_MESSAGE_LIST.SUCCESS,
      payload: { list: newData }
    })
    yield put({
      type: ActionTypes.HTTP_CALL_COMPLETED
    })
  } else {
    // ERROR HAS OCCURRED
    yield put({ type: ActionTypes.HTTP_REQUEST_ERROR, payload: { error } })
    yield put({ type: ActionTypes.HTTP_CALL_COMPLETED })
  }
}

function* getMessageView(payload: any) {
  yield put({
    type: ActionTypes.GET_MESSAGE_VIEW.SUCCESS,
    payload: undefined
  })
  yield put({ type: ActionTypes.HTTP_CALL_STARTED })
  const { response, error } = yield call(messageApi.getMessage, payload.idx)
  if (response) {
    // SUCCEED
    yield put({
      type: ActionTypes.GET_MESSAGE_VIEW.SUCCESS,
      payload: response.data
    })
    yield put({
      type: ActionTypes.HTTP_CALL_COMPLETED
    })
  } else {
    // ERROR HAS OCCURRED
    yield put({ type: ActionTypes.HTTP_REQUEST_ERROR, payload: { error } })
    yield put({ type: ActionTypes.HTTP_CALL_COMPLETED })
  }
}

// ACTION WATCHERS
function* watchMessageList() {
  yield takeEvery(ActionTypes.GET_MESSAGE_LIST.REQUEST, getMessageList)
}
function* watchMessageView() {
  yield takeEvery(ActionTypes.GET_MESSAGE_VIEW.REQUEST, getMessageView)
}
export default function* watchMessageSaga() {
  yield fork(watchMessageView)
  yield fork(watchMessageList)
}
