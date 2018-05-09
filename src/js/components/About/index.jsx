import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about">
    <div className="container">
      <h2 className="g-title">
        Currency converter
      </h2>
      <p className="about__desc">
        This is currency converter web app. The data get from http://fixer.io/.
      </p>
      <p className="about__copyright">
        Design by Tuan Anh (tuananh.exp@gmail.com)
      </p>
      <Link to="/" href="/">
        <button className="btn btn-danger">Back to home</button>
      </Link>
    </div>
  </div>
);

export default About;
