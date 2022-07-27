import { logo } from "../../assets/index";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.password == ""
    ) {
      toast.warning("Please fill all the fields");
    } else {
      try {
        const response = await axios.post("/api/auth/signup", user);
        if (response.status === 201) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );

          authDispatch({
            type: "SIGNUP",
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          toast.success("Successfully Signed In");
          navigate("/");
        } else if (response.status === 422) {
          throw new Error("User already exists");
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
          <h2>Sign Up</h2>
        </div>
        <div className="profile-main">
          <div className="profile-first-last-name">
            <div className="profile-first-name">
              <label htmlFor="first name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input-text"
                value={user.firstName}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="profile-last-name">
              <label htmlFor="last name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="input-text"
                name="lastName"
                value={user.lastName}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="profile-email">
              <label htmlFor="mail">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="input-text"
                name="email"
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
                name="password"
                className="input-password"
                value={user.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="profile-checkbox">
            <label className="select-input">
              <input type="checkbox" className="checkbox-input" name="light" />
              <span className="inp-text">
                I accept all Terms &amp; Conditions.
              </span>
            </label>
          </div>
          <div className="btn ">
            <button className="btn-link" onClick={signupHandler}>
              Sign up
            </button>
          </div>
          <div className="secondary-profile ">
            <span>Already have an account?</span>
            <Link to="/login" className="links">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUp };
