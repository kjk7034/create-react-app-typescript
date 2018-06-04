import * as React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Header: React.SFC<{}> = () => (
  <div className="application">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <nav>
      <ul className="navi">
        <li>
          <NavLink
            exact={true}
            to="/"
            className="item"
            activeClassName="active"
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/message" className="item" activeClassName="active">
            message 목록!!
          </NavLink>
        </li>
        <li>
          <NavLink to="/test" className="item" activeClassName="active">
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
