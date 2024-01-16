import {createContext, useContext, useState} from 'react'

const NxtWatchContext = createContext()

export const NxtWatchProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [watchList, setWatchList] = useState([])
  const [favoriteVideos, setFavoriteVideos] = useState([])

  const handleToggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  const handleAddToWatchList = video => {
    setWatchList(prevWatchList => [...prevWatchList, video])
  }

  const handleAddToFavorites = video => {
    setFavoriteVideos(prevFavorites => [...prevFavorites, video])
  }

  return (
    <NxtWatchContext.Provider
      value={{
        isDarkTheme,
        handleToggleTheme,
        watchList,
        handleAddToWatchList,
        favoriteVideos,
        handleAddToFavorites,
      }}
    >
      {children}
    </NxtWatchContext.Provider>
  )
}

export const useNxtWatch = () => useContext(NxtWatchContext)
