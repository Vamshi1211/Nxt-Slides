import './index.css'

const slidesLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png '

const Header = () => (
  <nav className="navbar-main-container">
    <div className="navbar-container">
      <img
        src={slidesLogo}
        alt="nxt slides logo"
        className="next-slides-logo"
      />
      <h1 className="nav-heading">Nxt Slides</h1>
    </div>
  </nav>
)

export default Header
