import * as React from 'react'
import { Helmet } from 'react-helmet'

const Home: React.SFC<{}> = () => (
  <div className={'App-container'}>
    <Helmet>
      <title>Home Title11</title>
    </Helmet>
    <section>
      <h1>홈!!</h1>
    </section>
  </div>
)

export default Home
