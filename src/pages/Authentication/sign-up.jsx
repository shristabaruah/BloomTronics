import { logo } from "../../assets/index";
import "./auth.css";
import { Link } from "react-router-dom";

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
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="First Name" className="input-text"/>
                        </div>
                        <div className="profile-last-name">
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="Last Name" className="input-text"/>
                        </div>
                        <div className="profile-email">
                            <label htmlFor="mail">Email Address</label>
                            <input type="text"placeholder='Email' className="input-text"/>
                        </div>
                        <div className="profile-pwd">
                            <label htmlFor="mail">Password</label>
                            <input type="password" placeholder="Password" className="input-password"/>
                        </div>
                    </div>
                        <div className="profile-checkbox" >
                            <label className="select-input" >
                                <input type="checkbox" className="checkbox-input" name="light"/>
                                <span className="inp-text">I accept all Terms &amp; Conditions.</span>
                            </label>
                        </div>
                        <div className="btn ">
                            <button  className="btn-link">Sign up</button>
                        </div>
                        <div className="secondary-profile ">
                            <span>Already have an account?</span><Link to="/login" className="links"> Sign in</Link>
                        </div>
                </div>
              </div>
          </div>
      );
  }

  export { SignUp };
 