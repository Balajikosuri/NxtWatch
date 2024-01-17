import {useState} from 'react'

import Popup from 'reactjs-popup'
import './index.css'

const BannerPopup = () => {
  const [open, setOpen] = useState(true)
  const closeModal = () => setOpen(false)
  return (
    <div data-testid="banner">
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="card card-body BannerPopup">
          <div className="d-flex flex-column ">
            <img
              className="app-logo banner-app-logo mb-3"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <h3 className="mb-4">
              Buy Nxt Watch Premium prepaid plans with UPI
            </h3>
            <div className="mb-2">
              <button type="button" className="p-2 bg-transparent">
                GET IT NOW
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => setOpen(o => !o)}
              type="button"
              data-testid="close"
              className="btn btn-outline mt-auto fs-6"
              aria-hidden="true"
            >
              <b>X</b>
            </button>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default BannerPopup
