import React, {useState} from "react";

function Item({ name, category }) {
  const [ className, setClassName ] = useState('')
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setClassName('in-cart')} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
