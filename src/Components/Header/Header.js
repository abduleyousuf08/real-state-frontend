import logo from "../../images/updated.png";
import "../Header/Header.css";
import { FaLock } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </Link>
        </div>

        <div className="sub-container">
          <div className="first-items">
            <a href="/">Home</a>
            <a href="#">About us</a>
            <a href="#">Categories</a>
          </div>
          <div className="second-items">
            <Link to="/login">
              <a href="#" className="sign-in">
                <FaLock /> Sign in
              </a>
            </Link>
            {/* <Link to="/dashboard"> */}
            <a href="#" className="submit">
              {" "}
              <span className="icon-submit">
                {" "}
                <MdOutlineCreate />
              </span>{" "}
              Submit property{" "}
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/*content part */}
    </div>
  );
}

export default Header;
