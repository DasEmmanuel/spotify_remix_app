const NewReleaseItem = props => {
  const {playListDetails} = props
  const {name, images} = playListDetails
  const {url} = images[0]
  return (
    <li className="playListItem">
      <img src={url} className="cover_image" alt="new releases" />
      <p>{name}</p>
    </li>
  )
}

export default NewReleaseItem
