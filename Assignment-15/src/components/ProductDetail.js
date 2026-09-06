import React, { useState } from 'react';

function ProductDetail({ product, onBack }) {
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState(false);

  const handleAdd = () => {
    setNotice(true);
    setTimeout(() => setNotice(false), 2500);
  };

  return (
    <div className="container my-5">
      <button className="btn btn-outline-secondary mb-4" onClick={onBack}>
        &larr; Back to Products
      </button>

      {notice && (
        <div className="alert alert-success">
          <strong>Added to Cart!</strong> {quantity} unit(s) of {product.name} added to your basket.
        </div>
      )}

      <div className="card shadow border-0 overflow-hidden">
        <div className="row g-0">
          <div className="col-lg-6 bg-light d-flex align-items-center justify-content-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>

          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-primary px-3 py-2">{product.category}</span>
                <span className="badge bg-warning text-dark px-3 py-2 fs-6">&#9733; {product.rating} / 5.0</span>
              </div>

              <h1 className="fw-bold mb-3 text-dark">{product.name}</h1>
              
              <div className="mb-4">
                <span className="display-6 fw-bold text-success">&#8377; {product.price.toLocaleString('en-IN')}</span>
                <span className="text-muted text-decoration-line-through fs-5 ms-3">&#8377; {product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="badge bg-danger ms-3">Special Offer</span>
              </div>

              <h5 className="fw-bold text-secondary">Product Overview</h5>
              <p className="text-muted mb-4">{product.fullDesc}</p>

              <h5 className="fw-bold text-secondary mb-3">Specifications</h5>
              <table className="table table-bordered table-sm mb-4">
                <tbody>
                  {Object.entries(product.specs).map(([k, v]) => (
                    <tr key={k}>
                      <th className="bg-light text-muted" style={{ width: '40%' }}>{k}</th>
                      <td className="fw-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-3 border-top">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="fw-semibold">Quantity:</label>
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="form-control"
                    style={{ width: '80px' }}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div className="col-sm d-flex gap-2">
                  <button className="btn btn-primary flex-grow-1 py-2 fw-semibold" onClick={handleAdd}>
                    Add to Cart
                  </button>
                  <button className="btn btn-success flex-grow-1 py-2 fw-semibold" onClick={() => alert("Proceeding to checkout with " + quantity + "x " + product.name)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
