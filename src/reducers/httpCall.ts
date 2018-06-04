import produce from 'immer'
import * as ActionTypes from '../actions/ActionTypes'

export type CommonState = {
  httpCallsInProgress: boolean
}

const initialState: CommonState = {
  httpCallsInProgress: false
}

export default (state: CommonState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.HTTP_CALL_STARTED:
      return produce(state, draft => {
        draft.httpCallsInProgress = true
      })
    case ActionTypes.HTTP_CALL_COMPLETED:
      return produce(state, draft => {
        draft.httpCallsInProgress = false
      })
    default:
      return state
  }
}
