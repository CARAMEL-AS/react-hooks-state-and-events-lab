import React, { useState, useEffect } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState('All');

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => setCategory(e.target.value)} id={'category-list'} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter(item => {
          return category === 'All' ? true : item.category === category
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
