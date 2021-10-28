import { render } from "@testing-library/react";
import React from "react";
import Navi from "./Navi.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Auth() {
  return (
    <div className="flex flex-col justify-center items-center mt-44 mb-44">
      <div className="card bordered shadow-lg w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="card-title text-5xl p-6">Login to your account</h1>
        <div class="form-control p-4 w-3/5">
          <input
            type="text"
            placeholder="Username"
            class="input input-primary input-bordered text-xl"
          />
        </div>
        <div class="form-control p-4 w-3/5 ">
          <input
            type="password"
            placeholder="Password"
            class="input input-primary input-bordered text-xl"
          />
        </div>
        <div className="p-4">
          <button className="btn btn-primary btn-lg">LOGIN</button>
        </div>
        <div className="p-4">
          <a className="text-lg">New User? </a>
          <Link to="/Register" class="text-lg underline text-primary">
              Register
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
