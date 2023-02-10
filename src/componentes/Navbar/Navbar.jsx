import React from 'react'
import {Center, Container, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import CartWidget from '../carrito/CartWidget';
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
    
      <Flex className="container"
      backgroundColor="blackAlpha.800"
      color="red"
      maxW="100%"
      p="4"
      minWidth='max-content' 
      gap='2'
      flexDirection="column" 
       >

      <Flex  >
      
      <NavLink  to={"/"}>
  
          <Text fontSize="4xl" >sOnlitendss</Text>
         
      </NavLink>
    
      </Flex>


<Flex justifyContent="space-between" >
        <NavLink to="/">        
        Homess
        </NavLink>

        <NavLink to="/hombre">
        hombre
        </NavLink>

        <NavLink  to="/mujer">
        mujer        
        </NavLink>


        <NavLink  to="/electronica">
        electronica
        </NavLink>

        <NavLink  to="/accesorios">        
        accesorios
        </NavLink>
        
        
        <NavLink to={"/cartwidget"}>
          <CartWidget/>
        </NavLink>
        </Flex>





</Flex>

  );


}

export default Navbar