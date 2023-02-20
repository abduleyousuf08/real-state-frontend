<<<<<<< HEAD:src/Components/Header.js
import logo from "../images/updated.png";
import "../CSS/Header.css";
=======
import logo from "../../images/updated.png";
import "./Header.css";
>>>>>>> 102055c7fc1f695a8852d088de9c87255e6f8b2e:src/Components/Header/Header.js
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
