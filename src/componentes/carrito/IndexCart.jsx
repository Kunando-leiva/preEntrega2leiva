import { Avatar, Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";



const IndexCart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
 
  const[contador, setContador]= useState(0)
  const sumar =() => setContador(contador+1);
  const restar =() => setContador(contador-1);


  const getItem = async (id) => {
    const productDocRef = doc(db, "product", id);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      getItem(productDoc.data());
    } else {
      return null;
    }
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (

    <center>
     <Flex   justifyContent="space-between" h="10rem"  w="80%" background="gray.300" m="6" borderRadius="2xl">
   <Image  p="2" h="10rem" w="8rem" src={product.Image} borderRadius="2xl" />
  
   <Text  fontWeight='bold'>
    <Text mt="6" color="red">Descripcion</Text>
    <Flex mt="2">
      <Text>{product.title}</Text>
    </Flex>
  </Text>



  <Text  fontWeight='bold'>
    <Text mt="6" color="red">Cantidad</Text>
    <Flex mt="2">
    <button onClick={restar}>-</button>

<Text  marginInline="4" fontSize="2xl"> {contador} </Text>

<button onClick={sumar}>+</button>

   </Flex>
  </Text>

 


  <Text  fontWeight='bold'>
    <Text mt="6" color="red">Subtotal</Text>
    <Flex mt="2">
      <Text fontSize="2xl" >{product.title}$</Text>
    </Flex>
  </Text>



   <Box  alignItems="center" >

   <Text  m="" fontWeight='bold'>
    <Text mt="6" color="red">Total</Text>
    <Flex mt="2">
    <Badge ml=''  marginRight="3" colorScheme='green'>

     <Text fontSize="2xl" textAlign="center"  marginLeft="">{product.title}$100000</Text>    
    </Badge>
      
    </Flex>
  </Text>
    
   

   </Box>
 </Flex>
 </center>
   
  );
};

export default IndexCart