import React, { useState } from "react";
import "./Login.css";
import logo from "../../Assets/Images/peracto-logo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
const Login = () => {
  let [open, setOpen] = useState(false);
  let { auth, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let openEye = () => {
    setOpen(!open);
  };

  let closeEye = () => {
    setOpen(false);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get("https://dummyjson.com/users");
      // console.log(response.data);

      if (response.data) {
        const user = response.data.users.find(
          (user) => user.username === username && user.password === password
        );
        // console.log(user)
        if (user) {
          localStorage.removeItem("authUser");

          setAuth({
            isAuthenticated: true,
            user: user,
          });
          localStorage.setItem("authUser", JSON.stringify(user));
          navigate("/home");
          toast.success("Login Successfully");
        } else {
          toast.error("Unauthorized User");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="log-body">
      <div className="login-form">
        <h1 className="text-center ">Welcome to Peracto-Infotech</h1>
        <div className="brand-logo">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label className="form-label ">Username:</label>
            <input
              type="text"
              className="form-control"
              name={username}
              id="exampleInputEmail1"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              required
            >
              Password
            </label>
            <input
              type={open ? "text" : "password"}
              className="form-control"
              name={password}
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {open ? (
              <FaRegEyeSlash className="eye" onClick={closeEye} />
            ) : (
              <FaRegEye className="eye" onClick={openEye} />
            )}
          </div>

          <button type="submit" className="btn btn-primary ">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
