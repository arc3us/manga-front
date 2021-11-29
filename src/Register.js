import React, { useState, useEffect } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cpass, setCpass] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email, password, cpass));
    setSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit)
    {
      console.log(email, password, cpass);
    }
  },[formErrors]);

  function validate(email, password, cpass) {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!regex.test(email)) errors.email = "Please enter a valid email";
    if (password != cpass)
      errors.cpass = "Confirm password is not same as password";

    return errors;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-44 mb-44">
      <form
        className="card bordered shadow-lg w-1/2 flex flex-col items-center justify-center p-4"
        onSubmit={handleSubmit}
      >
        <h1 className="card-title text-5xl p-6">Register for a new account</h1>
        <div class="form-control p-4 w-3/5">
          <input
            type="text"
            placeholder="Name"
            class="input input-primary input-bordered text-xl"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Email"
            class="input input-primary input-bordered text-xl mt-4"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-md mt-2 text-red-400">{formErrors.email}</p>
          <input
            type="text"
            placeholder="Choose an username"
            class="input input-primary input-bordered text-xl mt-4"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            class="input input-primary input-bordered text-xl mt-4"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            class="input input-primary input-bordered text-xl mt-4"
            name="cpass"
            value={cpass}
            onChange={(e) => setCpass(e.target.value)}
            required
          />
          <p className="text-md mt-2 text-red-400">{formErrors.cpass}</p>
          
        </div>
        <div className="p-4">
          <button className="btn btn-primary btn-lg" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
