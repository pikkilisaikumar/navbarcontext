import Navbar from '../Navbar'

const NotFound = () => (
  <>
    <Navbar />
    <div className="image-home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="theme-home-image-one"
      />
      <h1>Lost Your Way</h1>
      <p>We cannot seem to find the page you are looking for.</p>
    </div>
  </>
)

export default NotFound
