import { useEffect, useState } from "react";
import data from "../data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import "../css/ItemListContainer.css";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) =>
      setTimeout(() => res(data), 2000)
    );

    promesa
      .then((response) => {
        if (!id) {
          setProducts(response);
        } else {
          const filtrado = response.filter(
            (producto) => producto.category === id
          );
          setProducts(filtrado);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" variant="danger" />;

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <Container className="contenedor row ">
        {products.map((product) => {
          return (
            <Card key={product.id} className="col-4">
              <Card.Img variant="top" src={product.foto} />
              <Card.Body>
                <Card.Title>{product.Producto}</Card.Title>
                <Card.Text>{product.Category}</Card.Text>
                <p>{product.Precio}</p>
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
