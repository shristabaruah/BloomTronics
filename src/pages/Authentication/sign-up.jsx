import { logo } from "../../assets/index";
import "./auth.css";

  const SignUp = ()=>{
      return (
          <div className="profile-container">
              <div className="profile-main-container">
              <div className="profile-header">
                    <img className="logo-img" src={logo} alt="logo"/>
                    <h2>Sign Up</h2>
                </div>
                <div className="profile-main">
                    <div className="profile-first-last-name">
                        <div className="profile-first-name">
                            <label for="first name">First Name</label>
                            <input type="text" placeholder="First Name" className="input-text"/>
                        </div>
                        <div className="profile-last-name">
                            <label for="last name">Last Name</label>
                            <input type="text" placeholder="Last Name" className="input-text"/>
                        </div>
                        <div className="profile-email">
                            <label for="mail">Email Address</label>
                            <input type="text"placeholder='Email' className="input-text"/>
                        </div>
                        <div className="profile-pwd">
                            <label for="mail">Password</label>
                            <input type="password" placeholder="Password" className="input-password"/>
                        </div>
                        <div className="profile-checkbox">
                            <label >
                                <input type="checkbox" className="checkbox-input" name="light"/>
                                <span className="inp-text">I accept all Terms & Conditions.</span>
                            </label>
                        </div>
                        <div className="btn ">
                            <a href="#" target="_blank" className="btn-link">Sign up</a>
                        </div>
                        <div className="secondary-profile ">
                            <span>Already have an account?</span><a href="../profile/login.html" className="links"> Sign in</a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      );
  }

  export { SignUp };
 