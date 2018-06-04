import produce from 'immer'
import * as ActionTypes from '../actions/ActionTypes'

export type MessageListItem = {
  id: number
  title: string
  userId: number
  body: string
}
export type MessageView = {
  id: number
  title: string
  userId: number
  body: string
}
export type MessageState = {
  messageList: {
    list: MessageListItem[]
  }
  messageView?: MessageView
}

const initialState: MessageState = {
  messageList: {
    list: []
  },
  messageView: undefined
}

export default (state: MessageState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_MESSAGE_LIST.SUCCESS:
      return produce(state, draft => {
        draft.messageList.list = action.payload.list
      })
    case ActionTypes.GET_MESSAGE_VIEW.SUCCESS:
      return produce(state, draft => {
        draft.messageView = action.payload
      })
    default:
      return state
  }
}
