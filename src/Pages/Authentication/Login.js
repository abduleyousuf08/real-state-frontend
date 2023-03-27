import "./Login.css";
import loginImage from "../../images/login image.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UserContext from "../../Utils/UserContext";
import { useContext } from "react";

function Login() {
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  function handleOnLogIn(){
    axios.post("http://localhost:3000/users/login", inputs)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        toast.success(res.data.message)
        setUser(true)
        navigate("/")
    }).catch((e)=>{
        toast.error(e.response.data.message)
    })
  }
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="form-container-parent">
          <div className="form-header-container">
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
                onChange={(e)=> setInputs({...inputs, email:e.target.value})}
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
                onChange={(e)=> setInputs({...inputs, password:e.target.value})}
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

          <button className="login-button"  onClick={handleOnLogIn}>Login</button>
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
export default Login;
