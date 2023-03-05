import "./SignUp.css";
import freepik from "../../images/last updated.jpg";
function SignUp() {
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
              <label className="firstName-label">FirstName:</label> <br />
              <input
                type="text"
                name=""
                id=""
                className="input-email"
                placeholder=""
              />
            </div>
            {/** */}
            <div>
              <label className="lastName-label">LastName</label>
              <br />
              <input type="text" className="input-email" />
            </div>
            {/** */}
            <div>
              <label className="phone-label">Phone Number</label> <br />
              <input type="text" className="input-email" />
            </div>
            {/** */}
            <div>
              <label className="email-label">Email</label>
              <br />
              <input type="text" name="" id="" className="input-email" />
            </div>
            {/** */}
            <div>
              <label className="password-label">Password</label>
              <br />
              <input type="text" className="input-email" />
            </div>
            {/** */}
            <div>
              <label className="confirm-password-label">Confirm Password</label>
              <input type="text" className="input-email" />
            </div>
            {/** */}
          </form>
          <button className="sign-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
