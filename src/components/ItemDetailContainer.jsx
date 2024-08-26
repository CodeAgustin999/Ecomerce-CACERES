import { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { ItemCount } from "../components/ItemCount";
import { Link, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../contexts/CartContext";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem, quantity } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(setLoading(false));
  }, []);
  const onAdd = (cantidad) => {
    addItem({ ...item, quantity: cantidad });
  };
  if (loading) return <Spinner animation="border" variant="danger" />;
  if (!item)
    return <Container className="mt-4">No se encuentra el producto</Container>;

  return (
    <>
      <Container className="mt-4">
        <h1>Producto</h1>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.item} height={200} />
        <h4>{item.categoryID}</h4>
        <p>${item.price}</p>
        <p>{item.description}</p>
      </Container>
      <div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    </>
  );
};
