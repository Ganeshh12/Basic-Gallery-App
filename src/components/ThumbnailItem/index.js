import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  changeActiveImage = () => {
    const {thumbnailDetails, changeActiveId} = this.props
    const {id} = thumbnailDetails
    changeActiveId(id)
  }

  render() {
    const {thumbnailDetails, isActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
    const style = isActive ? 'highlight' : 'normal'
    return (
      <li key={id}>
        <button type="button">
          <img
            className={style}
            src={thumbnailUrl}
            alt={thumbnailAltText}
            onClick={this.changeActiveImage}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
