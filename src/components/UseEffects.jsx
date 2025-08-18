import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
          .then((a) => a.json())
          .then(data => setProducts(data))
  }, [])

  return (
    <div>
      {products.map((el) => (
        <div key={el.id}>
          <h1>Id: {el.id}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;