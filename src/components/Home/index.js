import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="theme-home-image-one"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="theme-home-image-one"
              />
            )}
            {isDarkTheme ? (
              <h1>Home</h1>
            ) : (
              <h1 className="home-heading-styling">Home</h1>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
