/* import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Product App</h1>
      <nav>
        <Link to="/login">
          <h3 data-testid="login-link">Login Page</h3>
        </Link>
        <Link to="/dashboard">
          <h3 data-testid="home-link">Home</h3> </Link>
      </nav>
    </div>
  );
};

export default Home;
