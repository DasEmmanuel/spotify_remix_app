import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import './index.css'

const Sidebar = () => (
  <nav className="sidenav_Ctn">
    <img
      src="https://res.cloudinary.com/doki9ptsh/image/upload/fl_preserve_transparency/v1718292009/music_seqhok.jpg?_s=public-apps"
      alt="webiste logo"
      className="nav_Logo"
    />
    <div>
      <button type="button">
        .
        <LogoutRoundedIcon className="logout" />
      </button>
      <p>Logout</p>
    </div>
  </nav>
)

export default Sidebar
