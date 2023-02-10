import {
  Image,
  Text,
  Heading,
  Stack,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";


const ItemDetail = ({ productos }) => {
  const idProducto = useLocation().pathname.split("/")[2];
  const producto = productos[idProducto];
 

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { image, title, description, price } = producto;

  return ( 

  
    <Center m="2%"> 
   
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  alignItems="center"
  

>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '350px' }}
    src={image}
    alt='Caffe Latte'
  />
  

  <Stack>
    <CardBody >
      <Heading size='3xl'>{title}</Heading>

      <Text fontSize="2xl" py='8'>
       {description}
      </Text>


      <Text py='2' fontSize="3xl">
       ${price}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red' size='lg'>
        Mandar al Carrito
      </Button>

      <Button variant='solid' colorScheme='blue' size='lg' ml="30">
       Comprar Ahora
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Center>
 
  );
};

export default ItemDetail;