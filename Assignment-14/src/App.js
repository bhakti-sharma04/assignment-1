import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [count, setCount] = useState(0);
  const [cNum1, setCNum1] = useState(0);
  const [cNum2, setCNum2] = useState(0);
  const [cRes, setCRes] = useState(0);

  return (
    <div>
      {/* Basic Bootstrap Navbar */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">My React Portal</span>
          <div className="navbar-nav">
            <button className="nav-link btn btn-link" onClick={() => setPage('home')}>Homepage</button>
            <button className="nav-link btn btn-link" onClick={() => setPage('about')}>About</button>
            <button className="nav-link btn btn-link" onClick={() => setPage('calculator')}>Calculator</button>
            <button className="nav-link btn btn-link" onClick={() => setPage('counter')}>Counter</button>
            <button className="nav-link btn btn-link" onClick={() => setPage('tables')}>Tables</button>
          </div>
        </div>
      </nav>

      {/* Main Pages */}
      <div className="container my-4">
        {page === 'home' && (
          <div>
            {/* Simple Bootstrap Slider / Carousel */}
            <div id="demoCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner bg-secondary text-white text-center p-5 rounded">
                <div className="carousel-item active">
                  <h3>Welcome to My Homepage Slider</h3>
                  <p>Slide 1: This is a basic Bootstrap slider.</p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h4>Section 1</h4>
                  <p>Welcome to our student portal created using React and basic Bootstrap.</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h4>Section 2</h4>
                  <p>You can navigate to calculator, counter, and tables from the navbar above.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === 'about' && (
          <div className="card p-4">
            <h3>About Page</h3>
            <p>This is Assignment 14 where we created a Navbar to switch between pages and added a slider to the homepage.</p>
          </div>
        )}

        {page === 'calculator' && (
          <div className="card p-4" style={{ maxWidth: '350px', margin: '0 auto' }}>
            <h3>Calculator Component</h3>
            <input type="number" placeholder="Num 1" onChange={(e) => setCNum1(Number(e.target.value))} className="form-control mb-2" />
            <input type="number" placeholder="Num 2" onChange={(e) => setCNum2(Number(e.target.value))} className="form-control mb-2" />
            <button className="btn btn-primary mb-2" onClick={() => setCRes(cNum1 + cNum2)}>Add Numbers</button>
            <h5>Result: {cRes}</h5>
          </div>
        )}

        {page === 'counter' && (
          <div className="card p-4 text-center" style={{ maxWidth: '300px', margin: '0 auto' }}>
            <h3>Counter Component</h3>
            <h2>{count}</h2>
            <div>
              <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>Increment</button>
              <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
          </div>
        )}

        {page === 'tables' && (
          <div className="card p-3">
            <h3>Tables Component</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Bhakti</td><td>90</td></tr>
                <tr><td>2</td><td>Rahul</td><td>85</td></tr>
                <tr><td>3</td><td>Priya</td><td>80</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
