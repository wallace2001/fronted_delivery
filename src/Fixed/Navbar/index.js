import React, {useState} from 'react';
import { Menu } from '../../components/Menu';
import { Nav } from '../../components/Navbar';


export const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const showNavbar = (e) => {
      setNavbar(!navbar);
      console.log(navbar);
    }
    
    return(
        <>
              <Nav onclick={navbar}>
                  <Menu to="#" onClick={showNavbar} onclick={navbar} />
              </Nav>
              <Nav.Content onclick={navbar}>
                <Nav.Wrap>
                    <h3>Teste</h3>
                    <h3>Teste</h3>
                    <h3>Teste</h3>
                    <h3>Teste</h3>
                </Nav.Wrap>
              </Nav.Content>
        </>
    );
}