import React from 'react';
import { products } from '../productsData';

function Products({ onSelectProduct }) {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Featured Products Catalog</h2>
        <p className="text-muted">Displaying at least 6 products with image, basic details, and more info.</p>
      </div>

      <div className="row g-4">
        {products.map(item => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <div className="card h-100 shadow-sm border-0 product-card">
              <div className="position-relative">
                <img src={item.image} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} alt={item.name} />
                <span className="badge bg-primary position-absolute top-0 end-0 m-2">{item.category}</span>
              </div>
              <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                <p className="card-text text-muted small flex-grow-1">{item.shortDesc}</p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="fs-5 fw-bold text-success">&#8377; {item.price.toLocaleString('en-IN')}</span>
                    <span className="text-muted text-decoration-line-through small ms-2">&#8377; {item.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <span className="badge bg-warning text-dark">&#9733; {item.rating}</span>
                </div>
                <button
                  className="btn btn-outline-primary w-100 fw-semibold"
                  onClick={() => onSelectProduct(item)}
                >
                  Show More Info &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
