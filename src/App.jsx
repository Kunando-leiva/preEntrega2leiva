import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";
import NavBar from "./componentes/Navbar/Navbar";
import ProductCard from "./componentes/ProductCard/ProductCard";
import { Navigate, Route, Routes } from "react-router-dom";
import Indexcart from "./componentes/carrito/IndexCart";
import { db } from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";




function App() {
  const [product, setProduct] = useState([]);
  const productCollectionRef = collection( db, "product");
  const [loading, setLoading] = useState(true);

  const getProduct = async ()=>{
    const querySnapshot = await getDocs(productCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setProduct(docs)
    setLoading(false);
    console.log(docs)
  };
  
  useEffect(() => {
    getProduct();
  }, [])
  
  if (loading) {
    return <h3>Cargando...</h3>;
  }

  

  return (
    <Container width="100%" maxWidth="100vw" padding={0}>
      <NavBar />
 
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <ItemListContainer
              ProductCard={ProductCard}
              productos={product}
              greeting="Bienvenido a nuestra tienda!"
            />
          }
        />
        <Route
          path="/producto/:id"
          element={<ItemDetail productos={product} />}
        />

        <Route
          path="/mujer"
          element={
            <ItemListContainer
              ProductCard={ProductCard}
              productos={product}
              greeting="Productos seleccionados para mujeres"
            />
          }
        />
        <Route
          path="/hombre"
          element={
            <ItemListContainer
              ProductCard={ProductCard}
              productos={product}
              greeting="Productos seleccionados para hombres"
            />
          }
        />
        <Route
          path="/accesorios"
          element={
            <ItemListContainer
              ProductCard={ProductCard}
              productos={product}
              greeting="Nuestros accesorios"
            />
          }
        />
        <Route
          path="/electronica"
          element={
            <ItemListContainer
              ProductCard={ProductCard}
              productos={product}
              greeting="Productos de electrónica"
            />
          }
        />

    <Route 
        path="/cartwidget" element={<Indexcart/>}>
    </Route>
  </Routes>
    </Container>
   
  );
}

export default App;
