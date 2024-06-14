import {Component} from 'react'
import Cookies from 'js-cookie'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import NewReleaseItem from '../NewReleaseItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class Newreleases extends Component {
  state = {newReleaseList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getNewreleases()
  }

  getNewreleases = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const {jwtToken} = Cookies.get('jwt_token')
    const newReleasesApiUrl = `https://apis2.ccbp.in/spotify-clone/new-releases`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(newReleasesApiUrl, options)
    const data = await response.json()
    const {albums} = data
    this.setState({
      newReleaseList: albums.items,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderSuccessView = () => {
    const {newReleaseList} = this.state
    return (
      <ul className="featuredPlaylist">
        {newReleaseList.map(eachItem => (
          <NewReleaseItem key={eachItem.id} playListDetails={eachItem} />
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

export default Newreleases
