import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3 text-primary">About Our Project</h1>
          <p className="lead text-muted">
            This project demonstrates a multi-view Single Page Application built using React. 
            All components are modularized and easily navigated through the top Navbar.
          </p>
          <p>
            Key topics covered include component-based layout design, props, useState, component lifecycle, 
            and modern UI styling using Bootstrap 5.
          </p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>Student:</strong> Bhakti</li>
            <li className="list-group-item"><strong>Course:</strong> React Web Development</li>
            <li className="list-group-item"><strong>Assignment:</strong> Assignment 14</li>
            <li className="list-group-item"><strong>Styling:</strong> Bootstrap 5 Carousel & Cards</li>
          </ul>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop"
            alt="Coding desk"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
