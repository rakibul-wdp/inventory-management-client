import React from 'react';

const Product = ({ product }) => {
  const { productName, productImg, productPrice, productCategory, productDescription } = product;
  return (
    <div className='card max-w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={productImg} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-accent'>{productName}</h2>
        <h2 className='card-title text-accent'>Price: {productPrice}</h2>
        <h2 className='card-title text-accent'>Category: {productCategory}</h2>
        <p>{productDescription.slice(0, 120)}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
