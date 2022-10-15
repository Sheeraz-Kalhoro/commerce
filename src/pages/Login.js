import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import loginimage from "../loginpng.png";
const Login = () => {
  return (
    <div className="login-form d-flex justify-content-center py-5">
      <div className="image-section  w-50">
        {/* <img src={loginimage} alt="LoginImage" width="100%" /> */}
        <h2>Login to order your Product</h2>
      </div>
      <div className="form-section w-50">
        <form className="w-50 px-5">
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              {/* <i className="fab fa-facebook-f"></i> */}
              <Facebook />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              {/* <i className="fab fa-google"></i> */}
              <Google />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              {/* <i className="fab fa-twitter"></i> */}
              <Twitter />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              {/* <i className="fab fa-github"></i> */}
              <GitHub />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
