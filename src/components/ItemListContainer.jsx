import { useEffect, useState } from "react";
import data from "../data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import "../css/ItemListContainer.css";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  where,
  query,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryID", "==", id));
    getDocs(refCollection)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" variant="danger" />;

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <Container className="contenedor row ">
        {items.map((product) => {
          return (
            <Card key={product.id} className="col-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.description}</Card.Title>
                <Card.Text>{product.CategoryID}</Card.Text>
                <p>${product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">Ver detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
};
