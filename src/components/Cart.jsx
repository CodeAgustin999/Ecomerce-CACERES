import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Provider } from "../contexts/CartContext";

export const Cart = () => {
  const {Items,removeList,deleteItem} =
    useContext(CartContext);
  //const [CartList, SetCarList] = useState([]);
  //if (totalquantity === 0) {
    //return (
      //<div>
       // <h1>No hay productos en el carrito</h1>
        //<Link to="/" className="option">
        //  Productos
       // </Link>
     // </div>
    //);
  //}


  return Items?.map((Item) => (
    <div key={Item.id}>
      <h1>{Item.title}</h1>
      <img src={Item.image} height={200} />
      <p >{Item.description}</p>
      <p>${Item.price}</p>
      <p>{Item.id}</p>
      </div>
  ))
  ;
};
