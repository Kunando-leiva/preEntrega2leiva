import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, 
  getCss, 
  Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Await, NavLink } from "react-router-dom";



const ProductCard = ({  id, image, title, price, description}) => {
  

  return (
    <div className="App">
    <Card maxW='25rem' height="44rem" mt="10" >
    <CardBody borderRadius="2xl" bg={"whiteAlpha.800"}  > 
    
  
    <NavLink to={`/producto/${id - 1}`}>
      <Center>
        <Image  borderRadius="lg"  w="25rem" height="25rem" src={image} alt={title} title={title}  /> 
      </Center>
    </NavLink>

      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>

        <Text me="3" color='blue.600' fontSize='1xl' w="95" substring="0, 7">
          {description}
        </Text>
        
        <Text me="3" color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>



<Center>
    <ButtonGroup  mt="12" >
        <Button  mr="10" borderRadius="2xl" variant='solid' colorScheme='blue'>
        Agregar al Carrito
        </Button>
        <Button borderRadius="2xl" variant='ghost' colorScheme='red'>
        Comprar Ahora
        </Button>
    </ButtonGroup>
</Center>

    </CardBody>

    </Card>
    </div>
  )
}

export default ProductCard