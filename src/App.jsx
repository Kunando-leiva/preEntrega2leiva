import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail";
import NavBar from "./componentes/Navbar";
import CartWidget from "./componentes/CartWidget";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductosCard from "./componentes/ProductosCard";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProductos(response.data);
    });
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container width="100%" maxWidth="100vw" padding={0}>
      <NavBar CartWidget={CartWidget} />
    
    
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <ItemListContainer
              ProductosCard={ProductosCard}
              productos={productos}
              greeting="Bienvenido a nuestra tienda!"
            />
          }
        />
        <Route
          path="/producto/:id"
          element={<ItemDetail productos={productos} />}
        />

        <Route
          path="/mujer"
          element={
            <ItemListContainer
              ProductosCard={ProductosCard}
              productos={productos}
              greeting="Productos seleccionados para mujeres"
            />
          }
        />
        <Route
          path="/hombre"
          element={
            <ItemListContainer
              ProductosCard={ProductosCard}
              productos={productos}
              greeting="Productos seleccionados para hombres"
            />
          }
        />
        <Route
          path="/accesorios"
          element={
            <ItemListContainer
              ProductosCard={ProductosCard}
              productos={productos}
              greeting="Nuestros accesorios"
            />
          }
        />
        <Route
          path="/electronico"
          element={
            <ItemListContainer
              ProductosCard={ProductosCard}
              productos={productos}
              greeting="Productos de electrónica"
            />

            
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
