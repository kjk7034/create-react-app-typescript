import * as React from 'react'
const ActivityIndicator: React.SFC<{}> = () => {
  return (
    <i className="activityIndicator" aria-hidden={true}>
      <span className="spinner">
        <span className="double-bounce1" />
        <span className="double-bounce2" />
      </span>
    </i>
  )
}
export default ActivityIndicator
