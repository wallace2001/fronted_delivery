import React from 'react';
import { Box } from '../../components/Header';

import {Container} from '../../components/Container';
import { Navbar } from '../Navbar';

export const Header = () => {

  return (
    <Container>
        <Box>
            <Box.Header>
              <Navbar />
            </Box.Header>

            <Box.Header>
              <h2>LOGO</h2>  
            </Box.Header>

            <div></div>
        </Box>
      </Container>
  )
}
