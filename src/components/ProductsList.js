import { useEffect, useState } from "react";

import Product from "./Product";

function ProductsList() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  };
  const getProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((categories) => setData(categories));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
   <h2 className="text-center p-4 text-3xl font-bold text-gray-800 tracking-wide uppercase border-b-4 border-indigo-500 inline-block shadow-sm">
  Our Products
</h2>

      <div className="container">
        <button
          key="all"
          className="btn btn-primary m-2"
          onClick={() => getProducts()}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-primary m-2"
              onClick={() => getProductsByCategory(category)}
            >
              {category}
            </button>
          );
        })}

        <div className="row">
          {data.map((product) => {
            return (
              <div className="col-md-3 mb-3">
                <Product
                  key={product.id}
                  product={product}
                  showButton={true}
                  showdesc={false}
                  photosize={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
