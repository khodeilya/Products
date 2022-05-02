import { useState } from "react";
import ProductList from "./ProductList/ProductList";

const Products = () => {
  const [name, setName] = useState([
    { id: 1, title: "Phone" },
    { id: 2, title: "Laptop" },
    { id: 3, title: "AirPods" },
  ]);
  return (
    <div>
      {name.map((item) => {
        return <ProductList key={item.id} name={item.title} />;
      })}
    </div>
  );
};

export default Products;
