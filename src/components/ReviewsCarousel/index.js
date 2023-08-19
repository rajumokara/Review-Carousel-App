import {Component} from 'react'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png '
const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {indexNo: 0}

  handleLeftArrow = () => {
    const {indexNo} = this.state
    if (indexNo > 0) {
      this.setState(prevState => ({
        indexNo: prevState.indexNo - 1,
      }))
    }
  }

  handleRightArrow = () => {
    const {indexNo} = this.state
    const {reviewsList} = this.props

    if (indexNo < reviewsList.length - 1) {
      //   console.log(indexNo)
      //   console.log(reviewsList.length - 1)
      this.setState(prevState => ({
        indexNo: prevState.indexNo + 1,
      }))
    }
  }

  render() {
    const {indexNo} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[indexNo]

    return (
      <>
        <div className="carouselContainer">
          <h1>Reviews</h1>

          <div className="carouselList">
            <button
              type="button"
              onClick={this.handleLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <div>
              <img src={imgUrl} alt={username} />
              <p className="name">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              type="button"
              onClick={this.handleRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewsCarousel
