import {Switch as Routes, Route, Redirect} from 'react-router-dom'
import './App.css'
import {useNxtWatch} from './NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => {
  const {isDarkTheme} = useNxtWatch()
  //   console.log(isDarkTheme)
  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* <Home />
      <LoginForm /> */}
      <Routes>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Routes>
    </div>
  )
}

export default App
