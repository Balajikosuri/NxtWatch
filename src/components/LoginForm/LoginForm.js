import {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './style.css'
import {useNxtWatch} from '../../NxtWatchContext'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const {isDarkTheme} = useNxtWatch()
  const history = useHistory()

  const handleFailuer = Message => {
    setErrorMessage(Message)
    setShowErrorMsg(true)
    console.log(Message)
  }

  const handleSuccessSubmit = jwtTocken => {
    Cookies.set('jwt_token', jwtTocken, {expires: 30})
    history.push('/')
  }

  async function getDataFromApi() {
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      handleSuccessSubmit(data.jwt_token)
    } else {
      handleFailuer(data.error_msg)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    getDataFromApi()
    setUsernameInput('')
    setPasswordInput('')
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="LoginForm">
      <form
        onSubmit={handleSubmit}
        className={`form login-form ${
          isDarkTheme ? 'bg-dark form-dark-bg ' : 'bg-white'
        }`}
      >
        <div className="mb-3 text-center">
          <img
            className="login-form-logo"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="app logo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            USERNAME
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="exampleInputEmail1"
            value={usernameInput}
            onChange={e => setUsernameInput(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-bold "
          >
            PASSWORD
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            id="exampleInputPassword1"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onClick={() => setShowPassword(prev => !prev)}
            autoComplete="current-password"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            <b> Show Password</b>
          </label>
        </div>

        <button type="submit" className="btn btn-primary form-control fw-bold ">
          Submit
        </button>
        {showErrorMsg && (
          <p className="text-danger pt-3 mt-1">*{errorMessage}</p>
        )}
      </form>
    </div>
  )
}

export default LoginForm
