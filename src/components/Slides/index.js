import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlidesContainer from '../SlideContainer'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png'

class Slides extends Component {
  state = {
    activeSlide: initialSlidesList[0].id,
    slidesList: initialSlidesList,
    onHeadingClicked: false,
    onParaClicked: false,
  }

  onClickSlide = uniqueId => {
    this.setState({
      activeSlide: uniqueId,
    })
  }

  onClickNew = () => {
    const {activeSlide, slidesList} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const index = slidesList.findIndex(eachItem => eachItem.id === activeSlide)
    slidesList.splice(index + 1, 0, newSlide)

    this.setState({activeSlide: newSlide.id})
  }

  onChangeHeading = event => {
    const {slidesList} = this.state

    const updatedList = slidesList.map(eachItem => {
      if (eachItem.id === event.target.id) {
        return {...eachItem, heading: event.target.value}
      }
      return eachItem
    })

    this.setState({slidesList: updatedList})
  }

  onChangeDescription = event => {
    const {slidesList} = this.state

    const updatedList = slidesList.map(eachItem => {
      if (eachItem.id === event.target.id) {
        return {...eachItem, description: event.target.value}
      }
      return eachItem
    })

    this.setState({slidesList: updatedList})
  }

  onClickHeading = () => {
    this.setState({onHeadingClicked: true})
  }

  onClickPara = () => {
    this.setState({onParaClicked: true})
  }

  onHeadingFocusLost = event => {
    const {slidesList} = this.state

    const updatedList = slidesList.map(eachItem => {
      if (eachItem.id === event.target.id && eachItem.heading === '') {
        return {...eachItem, heading: 'Heading'}
      }
      return eachItem
    })

    this.setState({slidesList: updatedList, onHeadingClicked: false})
  }

  onDescriptionFocusLost = event => {
    const {slidesList} = this.state

    const updatedList = slidesList.map(eachItem => {
      if (eachItem.id === event.target.id && eachItem.description === '') {
        return {...eachItem, description: 'Description'}
      }
      return eachItem
    })

    this.setState({slidesList: updatedList, onParaClicked: false})
  }

  render() {
    const {
      slidesList,
      activeSlide,
      onHeadingClicked,
      onParaClicked,
    } = this.state

    const filteredData = slidesList.filter(
      eachItem => eachItem.id === activeSlide,
    )

    const isHeadingClicked = onHeadingClicked ? 'active-heading' : ''

    const isParaClicked = onParaClicked ? 'active-des' : ''

    return (
      <div className="main-slide-container">
        <div className="slide-bar-container">
          <button
            type="button"
            className="new-button"
            onClick={this.onClickNew}
          >
            <img src={plusIcon} alt="new plus icon" className="plus-icon" />
            <p className="icon-name">New</p>
          </button>

          <ol className="slide-list-container">
            {slidesList.map((eachItem, index) => (
              <SlidesContainer
                key={eachItem.id}
                eachSlide={eachItem}
                onClickSlide={this.onClickSlide}
                isActive={eachItem.id === activeSlide}
                indexValue={index}
              />
            ))}
          </ol>
        </div>
        <div className="slide-view-container">
          {filteredData.map(eachItem => {
            const {heading, description} = eachItem

            return (
              <div className="slide-item" key={eachItem.id} testid="slide">
                {onHeadingClicked ? (
                  <input
                    className={`heading-input ${isHeadingClicked}`}
                    value={heading}
                    onChange={this.onChangeHeading}
                    onBlur={this.onHeadingFocusLost}
                    id={eachItem.id}
                  />
                ) : (
                  <h1 className="heading" onClick={this.onClickHeading}>
                    {heading}
                  </h1>
                )}
                {onParaClicked ? (
                  <input
                    className={`des-input ${isParaClicked}`}
                    onChange={this.onChangeDescription}
                    value={description}
                    id={eachItem.id}
                    onBlur={this.onDescriptionFocusLost}
                  />
                ) : (
                  <p className="des" onClick={this.onClickPara}>
                    {description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Slides
