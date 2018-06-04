import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HttpCall from '../components/HttpCall'
import Loading from '../components/Loading'

import '../styles/app.css'
import '../styles/common.css'

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})

const MessageList = Loadable({
  loader: () => import('./MessageList'),
  loading: Loading
})

const MessageView = Loadable({
  loader: () => import('./MessageView'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})
const App: React.SFC<{}> = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/message/:id" component={MessageView} />
      <Route path="/message" component={MessageList} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
    <HttpCall />
  </div>
)
export default App
