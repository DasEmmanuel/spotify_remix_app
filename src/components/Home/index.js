import {Component} from 'react'
import EditorsPicks from '../EditorsPicks'
import GenresMoods from '../GenresMoods'
import Newreleases from '../Newreleases'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home_bgCtn">
        <div className="editorsPicks_Ctn">
          <h1>{`Editor's picks`}</h1>
          <EditorsPicks />
        </div>
        <div className="genres_Ctn">
          <h1>Genres & Moods</h1>
          <GenresMoods />
        </div>
        <div className="genres_Ctn">
          <h1>New releases</h1>
          <Newreleases />
        </div>
      </div>
    )
  }
}
export default Home
