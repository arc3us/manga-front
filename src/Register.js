import { render } from "@testing-library/react";
import React from "react";
import Navi from "./Navi.js";

function Register() {
  return (
    <div className="flex flex-col justify-center items-center mt-44 mb-44">
      <div className="card bordered shadow-lg w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="card-title text-5xl p-6">Register for a new Account</h1>
        <div class="form-control p-4 w-3/5">
          {/* <label class="input-group"> */}
            {/* <span className="bg-primary text-white ">Name</span> */}
            <input
              type="text"
              placeholder="Name"
              class="input input-primary input-bordered text-xl"
            />
          {/* </label> */}

          {/* <label class="input-group mt-4"> */}
            {/* <span className="bg-primary text-white">E-mail</span> */}
            <input
              type="text"
              placeholder="Email"
              class="input input-primary input-bordered text-xl mt-4"
            />
          {/* </label> */}


          {/* <label class="input-group mt-4"> */}
            {/* <span className="bg-primary text-white">Username</span> */}
            <input
              type="text"
              placeholder="Choose an username"
              class="input input-primary input-bordered text-xl mt-4"
            />
          {/* </label> */}

          {/* <label class="input-group mt-4"> */}
            {/* <span className="bg-primary text-white">Password</span> */}
            <input
              type="password"
              placeholder="Password"
              class="input input-primary input-bordered text-xl mt-4"
            />
          {/* </label> */}

          {/* <label class="input-group mt-4"> */}
            {/* <span className="bg-primary text-white">Confirm Password</span> */}
            <input
              type="password"
              placeholder="Confirm Password"
              class="input input-primary input-bordered text-xl mt-4"
            />
          {/* </label> */}


        </div>
        <div className="p-4">
          <button className="btn btn-primary btn-lg">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
