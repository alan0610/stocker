import React, { useState, useEffect } from "react";
import FeatureCard from "../FeaturesCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3030/categories");
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  },[]);

  if (categories.length === 0) return <div>Loading...</div>;

  return <FeatureCard cards={categories} />;
};

export default Categories;
