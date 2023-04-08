import React, { useState } from "react";
import "./ProductList.css";

export interface Product {
  product_name: string;
  product_brand: string;
  gender: string;
  price: number;
  description: string;
  color: string;
}

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 1;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="product-list">
      {currentProducts.length > 0 ? (
        currentProducts.map((product, index) => (
          <div className="product" key={index}>
            <div className="product-info">
              <p><strong>Name:</strong> {product.product_name}</p>
              <p><strong>Brand:</strong> {product.product_brand}</p>
              <p><strong>Gender:</strong> {product.gender}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Color:</strong> {product.color}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products">
          <p>No products to display.</p>
        </div>
      )}
      {currentProducts.length > 0 && (
        <div className="paging">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "disabled" : ""}
          >
            Previous
          </button>

          <div className="page-indicator">
            <span>{`${currentPage}/${totalPages}`}</span>  
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "disabled" : ""}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};