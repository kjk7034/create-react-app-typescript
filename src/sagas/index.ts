import { fork } from 'redux-saga/effects'
import watchMessage from './watchMessage'

export default function* rootSaga() {
  yield fork(watchMessage)
}
