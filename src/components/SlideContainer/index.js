import './index.css'

const SlideContainer = props => {
  const {
    eachSlide,
    onClickSlide,
    isActive,
    indexValue,
    changeHeadingValue,
    headingValue,
    changeDesValue,
    desValue,
  } = props
  const {heading, description, id} = eachSlide

  const onClickEachSlide = () => {
    onClickSlide(id)
  }

  const count = indexValue + 1

  const activeSlide = isActive === true ? 'active-slide' : ''

  return (
    <li
      className={`each-slide-item ${activeSlide}`}
      testid={`slideTab${count}`}
    >
      <p className="slide-count">{count}</p>
      <button
        type="button"
        className="each-slide-button"
        onClick={onClickEachSlide}
      >
        <h1 className="slide-heading">
          {changeHeadingValue && isActive ? headingValue : heading}
        </h1>
        <p className="slide-des">
          {changeDesValue && isActive ? desValue : description}
        </p>
      </button>
    </li>
  )
}

export default SlideContainer
