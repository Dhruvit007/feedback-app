import {Component} from 'react'
import './index.css'
import EmojiComponent from '../Emoji'
import ThankYouComponent from '../ThankYouComponent'

class Feedback extends Component {
  state = {status: true}

  onFeedBack = () => {
    this.setState({status: false})
  }

  render() {
    const {status} = this.state
    const {resources} = this.props
    return (
      <div className="container">
        <ul className="content-container">
          {status && (
            <EmojiComponent
              resources={resources}
              onFeedBack={this.onFeedBack}
            />
          )}
          {!status && <ThankYouComponent resources={resources} />}
        </ul>
      </div>
    )
  }
}

export default Feedback
