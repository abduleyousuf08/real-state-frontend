import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import freepik from "../../images/last updated.jpg";
import { toast } from "react-toastify";
function SignUp() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({})

  function handleOnSignUp(e){
    e.preventDefault()
    axios.post("http://localhost:3000/users/register", inputs)
    .then((res)=>{
      toast.success(res.data.message)
      navigate("/login")
    })
    
  }
  return (
    <div className="sign-container">
      <div className="sign-sub-container">
        <div>
          <img src={freepik} alt="" className="image-size" />
        </div>

        <div className="form-sign-container-parent">
          <div>
            <h1 className="sign-up-sign">Sign Up</h1>
          </div>

          <form action="#" className="data-fill-section">
            <div className="firstSection-form">
              <label className="firstName-label">Full name:</label> <br />
              <input
                type="text"
                name=""
                id=""
                className="input-email"
                placeholder=""
                onChange={(e)=> setInputs({...inputs, name:e.target.value})}
              />
            </div>
            {/** */}
            <div>
              <label className="email-label">Email:</label>
              <br />
              <input type="text" className="input-email" 
              onChange={(e)=> setInputs({...inputs, email:e.target.value})}/>
            </div>
            {/** */}
            <div>
              <label className="phone-label">Phone Number</label> <br />
              <input type="text" className="input-email" 
              onChange={(e)=> setInputs({...inputs, phone:e.target.value})}/>
            </div>
            {/** */}
            <div>
              <label className="password-label">Password</label>
              <br />
              <input type="text" className="input-email" 
              onChange={(e)=> setInputs({...inputs, password:e.target.value})}/>
            </div>
            {/** */}
            <div>
              <label className="confirm-password-label">Confirm Password</label>
              <input type="text" className="input-email" 
              onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}/>
            </div>
            {/** */}
          </form>
          <button className="sign-button" onClick={handleOnSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
