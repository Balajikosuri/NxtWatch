import {withRouter, useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut} from 'react-icons/io'
import {VscColorMode} from 'react-icons/vsc'
import {FaRegLightbulb} from 'react-icons/fa'
import {useNxtWatch} from '../../NxtWatchContext'

import './index.css'

const Header = () => {
  const {handleToggleTheme, isDarkTheme} = useNxtWatch()
  const history = useHistory()
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }
  return (
    <div className="Header">
      {/* Mobile Header */}
      <div className="mobile_header w-100 ">
        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid ">
            {/* app logo */}
            <Link to="/">
              <img
                className="app-logo"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="header app logo"
              />
            </Link>
            {/* hamburger/menu Icon */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {isDarkTheme ? (
                <GiHamburgerMenu size={25} color="white" />
              ) : (
                <i className="navbar-toggler-icon" />
              )}
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleToggleTheme}
            >
              {!isDarkTheme ? (
                <VscColorMode size={25} />
              ) : (
                <FaRegLightbulb size={25} color="white" />
              )}
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleLogout}
            >
              {!isDarkTheme ? (
                <IoIosLogOut size={25} />
              ) : (
                <IoIosLogOut color="#fff" size={25} />
              )}
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Link">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="Dropdown"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="Action">
                        Action
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#Disabled"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* lg-devices header */}
      <div className="form-check form-switch lg_devices_header">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          onClick={handleToggleTheme}
        />

        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Toggle the Dark/Light Mode
        </label>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

// export default withRouter‎(Header)
export default withRouter(Header)
