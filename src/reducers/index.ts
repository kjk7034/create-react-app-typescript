import { combineReducers } from 'redux'
import httpCall from './httpCall'
import message from './message'

export default combineReducers({
  httpCall,
  message
})
