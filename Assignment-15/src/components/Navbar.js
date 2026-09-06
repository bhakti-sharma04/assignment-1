import React from 'react';

function Navbar({ activeTab, setActiveTab, setSelectedProduct }) {
  const navItems = [
    { id: 'home', label: 'Homepage' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'counter', label: 'Counter' },
    { id: 'tables', label: 'Tables' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <span className="navbar-brand fw-bold text-info" style={{ cursor: 'pointer' }} onClick={() => { setActiveTab('home'); setSelectedProduct(null); }}>
          TechStore & Portal
        </span>
        <div className="collapse navbar-collapse show" id="navContent">
          <ul className="navbar-nav ms-auto">
            {navItems.map(item => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link btn btn-link text-decoration-none ${activeTab === item.id ? 'active fw-bold text-warning' : 'text-white-50'}`}
                  onClick={() => { setActiveTab(item.id); if (item.id === 'products') setSelectedProduct(null); }}
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
