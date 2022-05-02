import { useState } from "react";

const ProductList = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="fw-bolder m-1 ">
      {props.name} {count}
      <button className="btn btn-success btn-sm m-1" onClick={handelincrement}>
        +
      </button>
      <button className="btn btn-warning btn-sm m-1" onClick={handeldecrement}>
        -
      </button>
      <button className="btn btn-danger btn-sm m-1" onClick={handeldelete}>
        Delete
      </button>
    </div>
  );
  function handelincrement() {
    setCount(count + 1);
  }
  function handeldecrement() {
    setCount(count - 1);
  }
  function handeldelete() {
    setCount(count - count);
  }
};

export default ProductList;
