import React, {useState} from 'react';
import { Menu } from '../../components/Menu/Open';
import { Close } from '../../components/Menu/Close';
import { Nav } from '../../components/Navbar';
import db from '../../../pages/api/config.json';
import { useRouter } from 'next/router';
const titles = db.links.title;
const links = db.links.links;
import { SidebarData } from '../../../pages/api/info';
import { SubMenu } from '../SubMenu/index';

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
                  <Close to="#" onClick={showNavbar} onclick={navbar} />
                <Nav.Wrap>
                  {SidebarData.map((info, index) => (
                    <Nav.space key={index}>
                      <SubMenu item={info} key={index} index={index} />
                      {/* <Nav.Link onClick={nextPage} id={index}>{info.title}</Nav.Link> */}
                    </Nav.space>
                  ))}
                </Nav.Wrap>
              </Nav.Content>
        </>
    );
}