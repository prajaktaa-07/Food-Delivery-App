import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-start vh-100" style={{ paddingTop: '8vh' }}>
      <div className="p-4 border rounded shadow-sm text-center" style={{ width: '320px' }}>
        <h2 className="mb-3">Register</h2>
        <input type="text" className="form-control mb-2" placeholder="Full Name" required />
        <input type="email" className="form-control mb-2" placeholder="Email" required />
        <input type="password" className="form-control mb-2" placeholder="Password" required />
        <input type="password" className="form-control mb-2" placeholder="Confirm Password" required />
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
