import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backGround = isDarkTheme
        ? 'image-home-container'
        : 'image-home-container1'

      return (
        <>
          <Navbar />
          <div className={backGround}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="theme-home-image-one"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="theme-home-image-one"
              />
            )}
            {isDarkTheme ? (
              <h1>About</h1>
            ) : (
              <h1 className="home-heading-styling">About</h1>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
