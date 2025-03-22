import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="position-relative text-center">
      <img 
        src="fd2.jpg" 
        alt="Food Delivery" 
        className="w-100 vh-80 object-fit-cover"
      />

      <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-4 rounded shadow"
        style={{ background: "rgba(0, 0, 0, 0.6)", maxWidth: "400px" }}>

        <h2 className="fw-bold">Welcome to FoodFlow - A Food Delivery App</h2>
        <p>Fresh & Fast Food Delivery!</p>

        <Link to="/login" className="btn btn-warning fw-bold rounded-pill px-4 py-2"
          style={{ transition: "0.3s ease" }}>
          Order Now
        </Link>

      </div>
    </div>
  );
};

export default Home;
