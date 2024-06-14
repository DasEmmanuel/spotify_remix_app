import {Component} from 'react'
import Cookies from 'js-cookie'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import GenrePlaylistItem from '../GenrePlaylistItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class GenresMoods extends Component {
  state = {genreList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGenrePlayLists()
  }

  getGenrePlayLists = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const {jwtToken} = Cookies.get('jwt_token')
    const categoriesApiUrl = `https://apis2.ccbp.in/spotify-clone/categories`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(categoriesApiUrl, options)
    const data = await response.json()
    const {categories} = data
    this.setState({
      genreList: categories.items,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderSuccessView = () => {
    const {genreList} = this.state
    return (
      <ul className="featuredPlaylist">
        {genreList.map(eachItem => (
          <GenrePlaylistItem key={eachItem.id} playListDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <img
        src="https://res.cloudinary.com/doki9ptsh/image/upload/fl_preserve_transparency/v1718292009/music_seqhok.jpg?_s=public-apps"
        alt="loader"
      />
    </div>
  )

  renderFailureView = () => (
    <div>
      <WarningRoundedIcon />
      <p>Something went wrong. Please try again</p>
      <button type="button">Try Again</button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.in_progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default GenresMoods
