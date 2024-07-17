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
    headingValue: 'heading',
    changeHeading: false,
    changeDes: false,
    desValue: 'Description',
  }

  onClickSlide = uniqueId => {
    const {slidesList} = this.state

    const indexPresent = slidesList.includes(uniqueId)
    console.log(indexPresent)

    this.setState({activeSlide: uniqueId, changeHeading: false})
  }

  onClickNew = () => {
    // const {activeSlide, slidesList} = this.state

    // const indexValue = slidesList.findIndex(
    //   eachItem => eachItem.id === activeSlide,
    // )

    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, newSlide],
    }))
  }

  onChangeHeading = event => {
    this.setState({headingValue: event.target.value, changeHeading: true})
  }

  changeDescription = event => {
    this.setState({desValue: event.target.value, changeDes: true})
  }

  render() {
    const {
      activeSlide,
      slidesList,
      headingValue,
      changeHeading,
      desValue,
      changeDes,
    } = this.state

    const filteredData = slidesList.filter(
      eachItem => eachItem.id === activeSlide,
    )

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
                changeHeadingValue={changeHeading}
                headingValue={headingValue}
                changeDesValue={changeDes}
                desValue={desValue}
              />
            ))}
          </ol>
        </div>
        <div className="slide-view-container">
          {filteredData.map(eachItem => {
            const {heading, description} = eachItem

            return (
              <div className="slide-item">
                {changeHeading ? (
                  <h1 className="heading-input">{heading}</h1>
                ) : (
                  <input
                    type="text"
                    className="heading-input"
                    value={changeHeading ? headingValue : heading}
                    onChange={this.onChangeHeading}
                    onBlur={this.onLostFocus}
                  />
                )}

                {changeDes ? (
                  <p className="des-input">{description}</p>
                ) : (
                  <input
                    className="des-input"
                    onChange={this.changeDescription}
                    value={changeDes ? desValue : description}
                  />
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
