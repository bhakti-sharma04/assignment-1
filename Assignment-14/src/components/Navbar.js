import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Homepage' },
    { id: 'about', label: 'About' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'counter', label: 'Counter' },
    { id: 'tables', label: 'Tables' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold cursor-pointer" onClick={() => setActiveTab('home')}>
          ReactPortal
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto">
            {navItems.map(item => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link btn btn-link text-decoration-none ${activeTab === item.id ? 'active fw-bold text-white' : 'text-white-50'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
