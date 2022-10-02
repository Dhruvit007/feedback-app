import './index.css'

const ListItem = props => {
  const {imageUrl, name, onFeedBack} = props
  return (
    <li className="list-item">
      <img src={imageUrl} className="imoji" alt={name} onClick={onFeedBack} />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default ListItem
