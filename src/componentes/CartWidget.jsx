import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { Flex } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    
    <Flex m="2" className="cart-widget"  >
      <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"2.2em", color:"red", marginRight:"15" }} /> 
      <p fontSize='4xl' className="qty-display">2</p>
    </Flex>
    
  );
};

export default CartWidget;
