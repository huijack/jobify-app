import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby 3 wolf moon pitchfork photo booth freegan, schlitz celiac
            distillery vape VHS selvage lomo. Whatever butcher health goth
            mustache tonx. Distillery chicharrones la croix waistcoat pour-over,
            cronut ascot taiyaki edison bulb scenester echo park banjo swag
            seitan. Fanny pack bruh chambray tonx.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
