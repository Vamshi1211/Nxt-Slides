import './index.css'

const SlideContainer = props => {
  const {eachSlide, onClickSlide, isActive, indexValue} = props
  const {heading, description, id} = eachSlide

  const onClickEachSlide = () => {
    onClickSlide(id)
  }

  const slideNumber = indexValue + 1

  const activeSlide = isActive === true ? 'active-slide' : ''

  return (
    <li
      className={`each-slide-item ${activeSlide}`}
      testid={`slideTab${slideNumber}`}
    >
      <p className="slide-count">{slideNumber}</p>
      <button
        type="button"
        className="each-slide-button"
        onClick={onClickEachSlide}
      >
        <h1 className="slide-heading">{heading}</h1>
        <p className="slide-des">{description}</p>
      </button>
    </li>
  )
}

export default SlideContainer
