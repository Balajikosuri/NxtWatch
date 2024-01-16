import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {NxtWatchProvider} from './NxtWatchContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NxtWatchProvider>
        <App />
      </NxtWatchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
