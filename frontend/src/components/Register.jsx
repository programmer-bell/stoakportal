import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegistration = async (e) => {
  e.preventDefault();

  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }

  const userData = { username, email, password };

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/register/",
      userData,
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Response:", response.data);

    setUsername("");
    setEmail("");
    setPassword("");

  } catch (error) {
    console.error("Registration Failed:", error.response?.data);
  }
};


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-5">Create an Account</h3>

          <form onSubmit={handleRegistration}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Set a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-info d-block mx-auto">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
