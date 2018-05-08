import React from 'react';

const PageNotFound = () => (
  <div className="not-found">
    <h3 className="not-found__title">404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <a href="/">
      <button className="btn btn-danger">Back to home</button>
    </a>
  </div>
);

export default PageNotFound;
