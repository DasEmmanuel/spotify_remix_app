import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Sidebar from '../Sidebar'
import './index.css'

const NotFound = () => (
  <div className="bgCtn">
    <Sidebar />
    <div className="content_Ctn">
      <div>
        <ArrowBackIcon />
        <p>Back</p>
      </div>
      <div className="errorCtn">
        <h1 className="notFoundError">404</h1>
        <p className="errorMsg">Page Not Found</p>
      </div>
    </div>
  </div>
)

export default NotFound
