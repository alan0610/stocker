import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(
          `http://localhost:3030/categories/${id}/products`
        );
        const data = await response.json();
        console.log(data);
        setProducts(data);
      };
    fetchProducts();
  },[id]);

  return (
    <>
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading...</div>
      }
    </>
  );
};

export default CategoryProducts;
