import * as ActionTypes from './ActionTypes'

export const getMessageList = () => {
  return {
    type: ActionTypes.GET_MESSAGE_LIST.REQUEST
  }
}

export const getMessageView = (idx: number) => {
  return {
    idx,
    type: ActionTypes.GET_MESSAGE_VIEW.REQUEST
  }
}
