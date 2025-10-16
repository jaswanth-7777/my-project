import axios from 'axios';
import { useEffect, useState } from 'react';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    axios.get('/api/products')
      .then(res => { if (mounted) { setProducts(res.data); setLoading(false); } })
      .catch(err => { setError(err.message || 'Failed to fetch'); setLoading(false); });
    return () => { mounted = false; };
  }, []);

  if (loading) return <p className="muted">Loading products...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-page">
      <h1>Product List</h1>
      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <button className="btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
