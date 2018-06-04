import * as React from 'react'
import { Helmet } from 'react-helmet'

const NotFound: React.SFC<{}> = () => (
  <div className={'App-container'}>
    <Helmet>
      <title>NotFound Title</title>
    </Helmet>
    <h1>Not Found</h1>
    <p>Page no Found!!</p>
  </div>
)

export default NotFound
