import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { Flex, Text } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    
    <Flex m="2" className="cart-widget"  >
      <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"2.0em", color:"red", marginRight:"15" }} /> 
      <Text fontSize='2xl' className="qty-display">2</Text>
    </Flex>
    
  );
};

export default CartWidget;
