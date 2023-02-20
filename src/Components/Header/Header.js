import logo from "../../images/updated.png";
import "./Header.css";
import { FaLock } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="sub-container">
          <div className="first-items">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Categories</a>
          </div>
          <div className="second-items">
            <a href="#" className="sign-in">
              <FaLock /> Sign in
            </a>
            <a href="#" className="submit">
              {" "}
              <span className="icon-submit">
                {" "}
                <MdOutlineCreate />
              </span>{" "}
              Submit property{" "}
            </a>
          </div>
        </div>
      </div>

      {/*content part */}
    </div>
  );
}

export default Header;
