import { logo } from "../../assets/index";
import "./auth.css";
import { Link } from "react-router-dom";

const ForgetPwd = ()=>{
    return (
        <div className="profile-container">
            <div className="profile-main-container">
                <div className="profile-header">
                    <img className="logo-img" src={logo} alt="logo"/>
                    <h2>Forgot Password</h2>
                </div>
                <div className="profile-main">
                    <div className="profile-email">
                        <label for="mail">Enter your email and we will send you a link to reset your password.</label>
                        <input type="text"placeholder='Email' className="input-text"/>
                    </div>
                    <div className="btn ">
                        <button className="btn-link">SUBMIT</button>
                    </div>
                    <div classNmae="secondary-profile ">
                        <Link to="/login" className="links">Back to Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ForgetPwd }