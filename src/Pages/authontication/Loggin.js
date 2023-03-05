import "./Login.css";
import loginImage from "../../images/login image.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

function Loggin() {
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="form-container-parent">
          <div className="fomr-header-container">
            <h1 className="form-header-title">Login</h1>
            <p className="form-paragraph">
              Doesn't have an account yet?{" "}
              <Link to="/register">
                <a href="#">Sign-Up</a>
              </Link>
            </p>
          </div>

          <form action="#" className="data-fill-section">
            <div>
              <label className="label-email">Email Address</label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="you@example.com"
                className="input-email"
              />
            </div>
            <div>
              <label className="label-password">Password</label>
              <a href="#" className="forgot-password-style">
                Forgot Password ?
              </a>
              <br />
              <input
                type="text"
                placeholder="Enter 6 characters or more"
                className="input-password"
              />
            </div>
          </form>
          <div className="remember-section">
            <input
              type="checkbox"
              name=""
              id=""
              className="remember-style-input"
              placeholder="Remember me"
            />
            <label className="remember-style-class">Remember me</label>
          </div>

          <button className="login-button">Login</button>
          <br />
          <div className="companies-address">
            <button className="google">
              <span>
                {" "}
                <FcGoogle className="google-icon" />
              </span>
              <p className="google-paragraph">Google</p>
            </button>
            <button className="google">
              <span>
                {" "}
                <ImFacebook className="facebook-icon" />
              </span>
              <p className="google-paragraph">Facebook</p>
            </button>
          </div>
        </div>
        <div>
          <img src={loginImage} alt="image" />
        </div>
      </div>
    </div>
  );
}
export default Loggin;
