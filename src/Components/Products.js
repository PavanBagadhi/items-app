import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Welcome to Product page</h1>
      <ul>
        <li>
          <Link to="/products/Book">A Book</Link>
        </li>
        <li>
          <Link to="/products/Carpet">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/Online Course">An Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
