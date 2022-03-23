import { logo } from "../../assets/index";
import "./auth.css";

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
                        <a href="#" target="_blank" className="btn-link">SUBMIT</a>
                    </div>
                    <div classNmae="secondary-profile ">
                        <a href="../profile/signin.html" className="links">Back to Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ForgetPwd }