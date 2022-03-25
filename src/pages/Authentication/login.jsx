import { logo } from "../../assets/index";
import "./auth.css";
import { Link } from "react-router-dom";

const Login = ()=>{
    return (
        <div className="profile-container">
            <div className="profile-main-container">
                <div className="profile-header">
                    <img className="logo-img" src={logo} alt="logo"/>
                    <h2>Log In</h2>
                </div>
                <div className="profile-main">
                    <div className="profile-email">
                        <label htmlFor="mail">Email Address</label>
                        <input type="text"placeholder='Email' className="input-text"/>
                    </div>
                    <div className="profile-pwd">
                        <label htmlFor="mail">Password</label>
                        <input type="password" placeholder="Password" className="input-password"/>
                    </div>
                    <div className="profile-checkbox">
                        <label className="select-input">
                            <input type="checkbox" className="checkbox-input" name="light"/>
                            <span className="inp-text">Remember Me</span>
                        </label>
                        <Link to="/forget-Password" className="links">Forgot Password?</Link>
                    </div>
                    <div className="btn ">
                        <button  target="_blank" className="btn-link">Login</button>
                    </div>
                    <div className="secondary-profile ">
                        <span >Not registered?</span> 
                        <Link to="/signup" className="links">Create an Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Login };