import { FABIcon, FARIcon, FASIcon } from "../FontAwesome/FontAwesome";
import obsSvgLogo from "../../assets/obs_logo.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="pages">
          <Link to="/" className="link">
            <img src={obsSvgLogo} alt="OBS Studio Logo" className="obs-logo" />
            OBS Web Tools
          </Link>
          <Link to="/border" className="link">
            <FARIcon name="square" className="icon" />
            Border
          </Link>
        </div>

        <div className="links">
          <div className="link">
            <FABIcon name="github" className="icon"/>
          </div>
        </div>
    </div>
  )
}

export default Navbar