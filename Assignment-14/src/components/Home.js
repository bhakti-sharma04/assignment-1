import React from 'react';

function Home({ setActiveTab }) {
  return (
    <div>
      {/* Bootstrap Carousel / Slider */}
      <div id="homeCarousel" className="carousel slide shadow-sm" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '350px', backgroundColor: '#1e3a8a' }}>
            <div className="d-flex h-100 align-items-center justify-content-center text-center text-white p-4">
              <div>
                <h1 className="display-5 fw-bold">Welcome to React Learning Portal</h1>
                <p className="lead">Mastering single-page applications with reusable components.</p>
                <button className="btn btn-warning fw-semibold px-4" onClick={() => setActiveTab('about')}>Explore About</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '350px', backgroundColor: '#0f766e' }}>
            <div className="d-flex h-100 align-items-center justify-content-center text-center text-white p-4">
              <div>
                <h1 className="display-5 fw-bold">Interactive State Utilities</h1>
                <p className="lead">Explore real-time reactive components like Calculator and Counter.</p>
                <button className="btn btn-light fw-semibold px-4" onClick={() => setActiveTab('calculator')}>Try Calculator</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '350px', backgroundColor: '#4338ca' }}>
            <div className="d-flex h-100 align-items-center justify-content-center text-center text-white p-4">
              <div>
                <h1 className="display-5 fw-bold">Structured Data Management</h1>
                <p className="lead">View responsive tables designed with Bootstrap grid and utilities.</p>
                <button className="btn btn-outline-light fw-semibold px-4" onClick={() => setActiveTab('tables')}>View Tables</button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Sections */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Key Course Modules</h2>
          <p className="text-muted">Hands-on practical components created throughout our React journey.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="display-6 text-primary mb-3">&#128425;</div>
                <h5 className="card-title fw-bold">React Calculator</h5>
                <p className="card-text text-muted">Complete arithmetic computation with interactive state management and real-time calculation history.</p>
                <button className="btn btn-outline-primary" onClick={() => setActiveTab('calculator')}>Open Calculator</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="display-6 text-success mb-3">&#128202;</div>
                <h5 className="card-title fw-bold">Interactive Counter</h5>
                <p className="card-text text-muted">Demonstrates component state with increment, decrement, and reset actions.</p>
                <button className="btn btn-outline-success" onClick={() => setActiveTab('counter')}>Open Counter</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="display-6 text-warning mb-3">&#128196;</div>
                <h5 className="card-title fw-bold">Bootstrap Tables</h5>
                <p className="card-text text-muted">Clean and structured tabular records showcasing student grades and subject marks.</p>
                <button className="btn btn-outline-warning text-dark" onClick={() => setActiveTab('tables')}>Open Tables</button>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Callout */}
        <div className="bg-light p-5 rounded-3 mt-5 text-center shadow-sm">
          <h3 className="fw-bold">Assignment 14 Deliverable</h3>
          <p className="lead text-muted">Single page application navigation built with React components and Bootstrap 5 styling.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
