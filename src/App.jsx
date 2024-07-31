import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { useEffect, useState } from "react";
import {ItemDetailContainer} from "./components/ItemDetailContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer />}
          />
          <Route
            path="/product/:id"
            element={<ItemDetailContainer/>}
          />

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
    </>
  );
}

export default App;
