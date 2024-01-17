import {withRouter, useHistory, Link, NavLink} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut} from 'react-icons/io'
import {VscColorMode} from 'react-icons/vsc'
import {FaRegLightbulb} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md'
import {useNxtWatch} from '../../NxtWatchContext'

import './index.css'

const Header = () => {
  const {handleToggleTheme, isDarkTheme} = useNxtWatch()
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  const renderMobileHeader = () => (
    <div className="mobile_header w-100">
      <nav className="navbar navbar-expand-lg w-100 d-flex flex-row justify-content-between p-2">
        {/* app logo */}
        <Link to="/">
          <img
            className="app-logo"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="nxt watch logo"
          />
        </Link>

        <div className="ml-auto">
          <button
            data-testid="theme"
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
              <GiHamburgerMenu size={25} color="#000" />
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
        </div>
        <div
          className={`collapse navbar-collapse p-2 ${
            isDarkTheme ? 'bg-light text-dark' : 'bg-white text-white'
          }`}
          id="navbarSupportedContent"
          style={{backgroundColor: `${!isDarkTheme && '#fff'}`}}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
            <li className="nav-item">
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="Link">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

  const renderLgDevicesHeader = () => (
    <div className="lg_devices_header">
      <Link to="/">
        <img
          className="app-logo"
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="nxt watch logo"
        />
      </Link>
      <div className="header-btns-container">
        <button
          data-testid="theme"
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
        {/* user profile */}
        <div>
          <img
            className="profile-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-info fw-bold "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <div className={`Header ${isDarkTheme && 'Header_dark'}`}>
      {/* Mobile Header */}
      {renderMobileHeader()}
      {/* lg-devices header */}
      {renderLgDevicesHeader()}
    </div>
  )
}

// export default withRouter‎(Header)
export default withRouter(Header)
