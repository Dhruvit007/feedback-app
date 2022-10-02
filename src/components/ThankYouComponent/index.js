import './index.css'

const ThankYouComponent = props => {
  const {resources} = props
  const {loveEmojiUrl} = resources
  return (
    <div>
      <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
      <h1 className="love-heading">Thank You !</h1>
      <p className="love-paragraph">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default ThankYouComponent
