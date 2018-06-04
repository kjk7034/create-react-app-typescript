// 액션 타입을 정의해줍니다.
import createRequestTypes from '../utils/createRequestTypes'

export const HTTP_CALL_STARTED = 'HTTP_CALL_STARTED'
export const HTTP_CALL_COMPLETED = 'HTTP_CALL_COMPLETED'
export const HTTP_REQUEST_ERROR = 'HTTP_REQUEST_ERROR'

export const GET_MESSAGE_LIST = createRequestTypes('GET_MESSAGE_LIST')
export const GET_MESSAGE_VIEW = createRequestTypes('GET_MESSAGE_VIEW')
