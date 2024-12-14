import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";



const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    //  login logic here
  };

  const backHandler = () => {
    navigate(-1); // Navigates to the previous page in the history stack
  };

  return (
    <>
    <div className="logIn-page">

    <button className="GoBack-button" onClick={backHandler}> <FontAwesomeIcon icon={faArrowLeft}/></button>

    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <div className="forgot-signup">
        <a className="forgot"  href="/#">Forgot password?</a>
        <a className="signup" href="/#">New member? Sign Up</a>
        </div>
      </form>
    </div>
    </div>

</>
  );
};

export default Login;
