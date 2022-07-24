import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='px-72 my-24'>
      <h2 className='text-2xl text-primary mb-10 border-b-4 border-secondary w-24 mx-auto'>Products</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
