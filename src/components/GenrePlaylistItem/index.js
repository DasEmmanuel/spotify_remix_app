const GenrePlaylistItem = props => {
  const {playListDetails} = props
  const {name, icons} = playListDetails
  const {url} = icons[0]

  return (
    <li className="playListItem">
      <img src={url} className="cover_image" alt="genre playlist" />
      <p>{name}</p>
    </li>
  )
}

export default GenrePlaylistItem
