import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ItemDetailContainer } from "./ItemDetailContainer";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const { addItem } = useContext(CartContext);

  const incremento = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decremento = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="contador">
      <div className="controladores">
        <button className="button" onClick={decremento}>
          -
        </button>
        <h4 className="number">{cantidad}</h4>
        <button className="button" onClick={incremento}>
          +
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => addItem(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
