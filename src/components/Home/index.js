import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeContent from '../HomeContent'

import BannerPopup from '../BannerPopup'
import './index.css'

const Home = () => {
  const a = ''
  return (
    <div data-testid="home" className="w-100 h-100">
      <Header />
      <BannerPopup />
      <div className="Home-content">
        <Sidebar />
        <HomeContent />
      </div>
    </div>
  )
}

export default Home
