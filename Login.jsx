import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-start vh-100" style={{ paddingTop: '10vh' }}>
      <div className="p-4 border rounded shadow-sm text-center" style={{ width: '300px' }}>
        <h2 className="mb-3">Login</h2>
        <input type="email" className="form-control mb-2" placeholder="Email" required />
        <input type="password" className="form-control mb-2" placeholder="Password" required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <p className="mt-3 text-center">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
