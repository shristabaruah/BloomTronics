import { logo } from "../../assets/index";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [user, SetUser] = useState({ email: "", password: "" });
  const guestUser = {
    email: "GuestUser123@gmail.com",
    password: "Guest123",
  };
  const guestHandler = (e) => {
    e.preventDefault();
    SetUser(guestUser);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    SetUser({ ...user, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email == "" || user.password == "") {
      toast.warning("Enter all the fields");
    } else {
      try {
        const response = await axios.post("/api/auth/login", user);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.foundUser));

          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });
          toast.success("You have successfully logged In");
          navigate("/");
        } else if (response.status === 404) {
          throw new Error("Email not found");
        } else if (response.status === 401) {
          console.log("wrong");
          throw new Error("Wrong Password");
        } else if (response.status === 500) {
          throw new Error("Server Error");
        }
      } catch (e) {
        console.error("error", e);
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <div className="profile-header">
          <img className="logo-img" src={logo} alt="logo" />
          <h2>Log In</h2>
        </div>
        <div className="profile-main">
          <div className="profile-email">
            <label htmlFor="mail">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input-text"
              value={user.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="profile-pwd">
            <label htmlFor="mail">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input-password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="profile-checkbox">
            <label className="select-input">
              <input type="checkbox" className="checkbox-input" name="light" />
              <span className="inp-text">Remember Me</span>
            </label>
            <Link to="/forget-Password" className="links">
              Forgot Password?
            </Link>
          </div>
          <div className="btn ">
            <button target="_blank" className="btn-link" onClick={loginHandler}>
              Login
            </button>
          </div>
          <div className="btn ">
            <button target="_blank" className="btn-link" onClick={guestHandler}>
              Guest
            </button>
          </div>
          <div className="secondary-profile ">
            <span>Not registered?</span>
            <Link to="/signup" className="links">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Login };
