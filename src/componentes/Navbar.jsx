import React from 'react'
import {Flex, IconButton, Spacer } from '@chakra-ui/react'
import CartWidget from './CartWidget';
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
      <Flex className="container"
      backgroundColor="blackAlpha.800"
      color="red"
      maxW="auto"
      p="4"
      minWidth='max-content' 
      alignItems='center' 
      gap='2'
      justifyContent="space-between"
       >
      

      <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        fontSize="2xl"
      />
      <MenuList>

        
        <NavLink to="/Home">
        <MenuItem icon={<AddIcon />} command='⌘T'>
        Home
        </MenuItem>
        </NavLink>

        <NavLink to="/Hombre">
        <MenuItem icon={<AddIcon />} command='⌘T'>
        hombre
        </MenuItem>
        </NavLink>

        <NavLink  to="/mujer">
        <MenuItem icon={<AddIcon />} command='⌘T'>
        mujer
        </MenuItem>
        </NavLink>


        <NavLink  to="/electronico">
        <MenuItem icon={<AddIcon />} command='⌘T'>
        electronico
        </MenuItem>
        </NavLink>

        <NavLink  to="/accesorios">
        <MenuItem icon={<AddIcon />} command='⌘T'>
        accesorios
        </MenuItem>
        </NavLink>


        
          
        

        

        

        </MenuList>

       

      
</Menu>

<h1 fontSize='4xl'>Onlitend</h1>


    
<CartWidget/>

    </Flex>

  

  
  )
  
}

export default Navbar