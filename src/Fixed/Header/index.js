import React, {useState, useEffect, useRef} from 'react';
import { Box } from '../../components/Header';

import {Container} from '../../components/Container';
import { Navbar } from '../Navbar';

export const Header = () => {
  const [fixed, setFixed] = useState();

  const changeNav = () => {
    if(window.scrollY >= 80){
      setFixed(true);
    }else{
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const modalRef = useRef();

  return (
        <Box fixed={fixed}>
            <Box.Header>
              <Navbar />
            </Box.Header>

            <Box.Header>
              <h2>RESTAURANTE</h2>  
            </Box.Header>

            <div></div>
        </Box>
  )
}
