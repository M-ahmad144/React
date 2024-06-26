import React, { useEffect, useState } from 'react';
import '../Styles/LoadData.css'
export default function LoadData({ limit }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [count]); // Empty dependency array to run this effect only once on mount


  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true)
    }
  }, [count]);

  function fetchProducts() {
    setLoading(true);

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.products && data.products.length > 0) {
          setProducts(prev => [...prev, ...data.products]);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className='container'>
      <h2 className="text-center mt-5 mb-4">Products</h2>
      <div className="row">

        {products && products.length > 0 ? (

          products.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              {/* card */}
              <div className="card shadow-sm product-card">
                {/* card image */}
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                {/* card body */}
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            No products found.
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        {

          <button disabled={disable} className="btn btn-primary" onClick={() => { setCount(count + 1) }}>Load More Products</button>
        }
      </div>

      <div className="text-center mt-4">
        {count > 0 && (
          <button className="btn btn-secondary" onClick={() => {
            setProducts([]);
            setCount(count > 1 ? count - 1 : 0);
          }}>
            Move Back
          </button>
        )}
      </div>

    </div>
  );
}
