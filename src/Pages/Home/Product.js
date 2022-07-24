import React from 'react';

const Product = ({ product }) => {
  const { productName, productImg, productPrice, productCategory, productDescription } = product;
  return (
    <div className='card max-w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={productImg} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{productName}</h2>
        <p>{productDescription}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
