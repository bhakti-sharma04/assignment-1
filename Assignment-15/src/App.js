import React, { useState } from 'react';

const products = [
  { id: 1, name: "Laptop", price: "Rs. 40,000", image: "https://via.placeholder.com/150", desc: "15-inch display, 8GB RAM, 256GB SSD" },
  { id: 2, name: "Mobile Phone", price: "Rs. 15,000", image: "https://via.placeholder.com/150", desc: "6.5-inch screen, 5000mAh battery" },
  { id: 3, name: "Headphones", price: "Rs. 1,200", image: "https://via.placeholder.com/150", desc: "Over-ear headphones with deep bass" },
  { id: 4, name: "Smart Watch", price: "Rs. 2,500", image: "https://via.placeholder.com/150", desc: "Step tracker, heart rate monitor" },
  { id: 5, name: "Keyboard", price: "Rs. 800", image: "https://via.placeholder.com/150", desc: "USB wired mechanical keyboard" },
  { id: 6, name: "Backpack", price: "Rs. 950", image: "https://via.placeholder.com/150", desc: "Waterproof college bag with 3 compartments" }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ background: '#333', color: 'white', padding: '12px 20px' }}>
        <h3 style={{ margin: 0, display: 'inline-block' }}>My Store</h3>
        <span style={{ marginLeft: '30px' }}>
          <button onClick={() => setSelectedProduct(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}>
            Products
          </button>
        </span>
      </nav>

      <div style={{ maxWidth: '900px', margin: '20px auto', padding: '0 15px' }}>
        {selectedProduct ? (
          // Product Detail Page
          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: '#fafafa' }}>
            <button onClick={() => setSelectedProduct(null)} style={{ marginBottom: '15px' }}>← Back to All Products</button>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '200px', marginBottom: '15px' }} />
            <h4 style={{ color: 'green' }}>Price: {selectedProduct.price}</h4>
            <p><b>Description:</b> {selectedProduct.desc}</p>
            <p><b>In Stock:</b> Yes</p>
            <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>Buy Now</button>
          </div>
        ) : (
          // 6 Products List
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Catalog (6 Products)</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {products.map(p => (
                <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', width: '220px', textAlign: 'center', borderRadius: '6px' }}>
                  <img src={p.image} alt={p.name} style={{ width: '120px', height: '120px' }} />
                  <h4>{p.name}</h4>
                  <p style={{ color: 'green', fontWeight: 'bold' }}>{p.price}</p>
                  <button onClick={() => setSelectedProduct(p)} style={{ background: '#28a745', color: 'white', border: 'none', padding: '6px 12px', cursor: 'pointer' }}>
                    Show More Info
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
