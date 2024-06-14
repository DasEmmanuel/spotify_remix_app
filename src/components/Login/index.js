import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showErrMsg: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showErrMsg: true, errorMsg: error})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrMsg, errorMsg} = this.state
    return (
      <div className="login_bgCtn">
        <form className="loginFormCtn" onSubmit={this.onSubmitForm}>
          <img
            src="https://res.cloudinary.com/doki9ptsh/image/upload/fl_preserve_transparency/v1718292009/music_seqhok.jpg?_s=public-apps"
            alt="login website logo"
          />
          <h1>Spotify Remix</h1>
          <div className="inputLabelsCtn">
            <div className="inputItemCtn">
              <label htmlFor="usernameEl">USERNAME</label>
              <input
                type="text"
                id="usernameEl"
                className="inputEl"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="inputItemCtn">
              <label htmlFor="passwordEl">PASSWORD</label>
              <input
                type="password"
                id="passwordEl"
                className="inputEl"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="inputItemCtn">
              <button type="submit" className="loginButton">
                Login
              </button>
              {showErrMsg && <p>*{errorMsg}</p>}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
