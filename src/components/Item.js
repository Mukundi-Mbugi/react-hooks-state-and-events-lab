import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)
  function handleAddToCart(){
    setIsInCart((isInCart)=> !isInCart)
  }

  return (
    <li className={isInCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart} >{isInCart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
