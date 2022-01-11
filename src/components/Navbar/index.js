import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const lightdarktheme = () => {
        toggleTheme()
      }

      const backgroundOne = isDarkTheme
        ? 'background-color'
        : 'background-color1'

      return (
        <div className={backgroundOne}>
          <Link to="/" className="link-item">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="webistelogo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="webistelogo"
              />
            )}
          </Link>
          <ul className="homeabutunorderlist">
            <Link to="/" className="link-item">
              {isDarkTheme ? (
                <li className="home-list-item">Home</li>
              ) : (
                <li className="home-list-item1">Home</li>
              )}
            </Link>
            <Link to="/about" className="link-item">
              {isDarkTheme ? (
                <li className="home-list-item">About</li>
              ) : (
                <li className="home-list-item1">About</li>
              )}
            </Link>
          </ul>
          <button
            type="button"
            testid="theme"
            className="themebutton"
            onClick={lightdarktheme}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="webistelogo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="webistelogo"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
