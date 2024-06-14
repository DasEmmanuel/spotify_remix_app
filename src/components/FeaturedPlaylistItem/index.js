import './index.css'

const FeaturedPlaylistItem = props => {
  const {playListDetails} = props
  const {images, name} = playListDetails
  const {url} = images[0]
  return (
    <li className="playListItem">
      <img src={url} alt="featured playlist" className="cover_image" />
      <p>{name}</p>
    </li>
  )
}

export default FeaturedPlaylistItem
