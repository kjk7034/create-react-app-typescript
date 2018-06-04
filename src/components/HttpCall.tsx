import * as React from 'react'
import { connect } from 'react-redux'
import ActivityIndicator from './ActivityIndicator'

type HttpCallProps = {
  httpCallsInProgress: boolean
}

const HttpCall: React.SFC<HttpCallProps> = props => {
  if (!props.httpCallsInProgress) {
    return null
  }
  return <ActivityIndicator />
}
function mapStateToProps(state: any) {
  return {
    httpCallsInProgress: state.httpCall.httpCallsInProgress
  }
}

export default connect(mapStateToProps)(HttpCall)
