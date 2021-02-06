import React, {useState} from 'react';
import { Menu } from '../../components/Menu';
import { Nav } from '../../components/Navbar';
import db from '../../../pages/api/config.json';
import { useRouter } from 'next/router';
const titles = db.links.title;
const links = db.links.links;

export const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const link = links.map(link => link);
    const router = useRouter();

    const showNavbar = (e) => {
      setNavbar(!navbar);
      console.log(navbar);
    }

    const nextPage = (e) => {
      e.preventDefault();
      const id = e.target.id;
      const target = link[id];

      router.push(`/${target}`);
    }

    
    return(
        <>
              <Nav onclick={navbar}>
                  <Menu to="#" onClick={showNavbar} onclick={navbar} />
              </Nav>
              <Nav.Content onclick={navbar}>
                <Nav.Wrap>
                  {titles.map((title, index) => (
                    <div key={index}>
                      <Nav.Link onClick={nextPage} id={index}>{title}</Nav.Link>
                    </div>
                  ))}
                </Nav.Wrap>
              </Nav.Content>
        </>
    );
}