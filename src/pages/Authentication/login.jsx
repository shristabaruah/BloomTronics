import { logo } from "../../assets/index";
import "./auth.css";

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
                        <label for="mail">Email Address</label>
                        <input type="text"placeholder='Email' className="input-text"/>
                    </div>
                    <div className="profile-pwd">
                        <label for="mail">Password</label>
                        <input type="password" placeholder="Password" className="input-password"/>
                    </div>
                    <div className="profile-checkbox">
                        <label className="select-input">
                            <input type="checkbox" className="checkbox-input" name="light"/>
                            <span className="inp-text">Remember Me</span>
                        </label>
                        <a href="../profile/forgot-pass.html" className="links">Forgot Password?</a>
                    </div>
                    <div className="btn ">
                        <a href="#" target="_blank" className="btn-link">Login</a>
                    </div>
                    <div className="secondary-profile ">
                        <span >Not registered?</span> 
                        <a href="../profile/signin.html" className="links">Create an Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Login };