import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { useEffect, useState } from "react";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
