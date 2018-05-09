import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="not-found">
    <h3 className="g-title">404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <Link to="/" href="/">
      <button className="btn btn-danger">Back to home</button>
    </Link>
  </div>
);

export default PageNotFound;
