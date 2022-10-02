import './index.css'
import ListItem from '../ItemComponent'

const EmojiComponent = props => {
  const {resources, onFeedBack} = props
  const {emojis} = resources
  return (
    <div>
      <h1 className="heading">
        How satisfied are you with our customer support performance
      </h1>
      <div className="imoji-container">
        {emojis.map(eachItem => {
          const {name, id, imageUrl} = eachItem
          return (
            <ListItem
              key={id}
              name={name}
              imageUrl={imageUrl}
              onFeedBack={onFeedBack}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EmojiComponent
