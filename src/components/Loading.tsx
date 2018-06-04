import * as React from 'react'
import { LoadingComponentProps } from 'react-loadable'

const Loading: React.SFC<LoadingComponentProps> = props => {
  if (props.error) {
    return <div>Error!</div>
  }
  return <div>Loading...</div>
}
export default Loading
