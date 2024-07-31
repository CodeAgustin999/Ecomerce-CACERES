import { useEffect, useState } from "react";
import data from "../data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";

import { Link,useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) =>
      setTimeout(() => res(data), 2000)
    );

    promesa
      .then((response) => {
          const finded =response.find((product) => product.id === Number(id))
          setProduct(finded)
        
        })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" variant="danger" />;
  if (!product)

  return<Container className="mt-4">No se encuentra el producto</Container>

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      <h2>{product.Producto}</h2>
      <img src={product.foto} alt={product.Producto} height={200} />
      <p>{product.Precio}</p>
    </Container>
)
  
}
