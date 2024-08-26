import cart from "../assets/cart4.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Link } from "react-router-dom";

export const CartWidget = () => (
  <Link to="/cart">
    <i className="bi bi-cart4"></i> <span>5</span>
  </Link>
);
