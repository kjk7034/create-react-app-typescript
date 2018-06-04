import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './pages/App'
import configureStore from './store/configureStore'
const store = configureStore()

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
)
export default App
