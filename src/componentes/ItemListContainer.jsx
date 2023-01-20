import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import ProductosCard from "./ProductosCard";
import { useLocation } from "react-router-dom";

function ItemListContainer({ productos, greeting }) {
  const mapCategories = {
    hombre: "men's clothing",
    mujer: "women's clothing",
    accesorios: "jewelery",
    electronico: "electronics",
  };

  const categoria = useLocation().pathname.split("/")[1] || "todos";
  const categoriaEstado = mapCategories[categoria] || "todos";

  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h1"
          color="blue.400"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="tall"
          letterSpacing="wide"
          textAlign="center"
        >
          {greeting}
        </Heading>
      </Box>
      <SimpleGrid minChildWidth="250px" spacing="20px" m="6">
        {productos
          .filter(
            (producto) =>
              producto.category === categoriaEstado ||
              categoriaEstado === "todos"
          )
          .map((producto) => (
            <ProductosCard
              id={producto.id}
              image={producto.image}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            />
          ))}
      </SimpleGrid>
    </>
  );
}

export default ItemListContainer;







