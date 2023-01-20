import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, 
  Heading, Image, Stack, Text } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";


const ProductosCard = ({id, image, title, price, description}) => {
  return (
    <div className="App">
    <Card maxW='sm'>
    <CardBody borderRadius="2xl" bg={"white"}>
    
    
    <NavLink to={`/producto/${id - 1}`}>
            <Image src={image} alt={title} title={title} borderRadius="lg" />
          </NavLink>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <Text>
         {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter  borderRadius="2xl" bg={"white"}>
      <ButtonGroup  spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='red'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
    </Card>
    </div>
  )
}

export default ProductosCard