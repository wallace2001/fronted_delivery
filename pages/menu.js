import React from 'react';
import { Menu } from '../src/components/Menu';
import { Header } from '../src/Fixed/Header';
import {falseApi} from '../pages/api/hello';
import db from '../pages/api/config.json';


export default function Home() {
  const API = falseApi;
  const colors = db.theme;
  
  return (
    <>
      <Header />
      <Menu.Container>
          <h1>HAMBURGUER DE FRANGO</h1>
          <Menu.Content>
            
            {API.map((info, index) => (

              <Menu.Slick key={index}>
                <img src={info.photo} alt={info.name} />
                <h1>{info.name}</h1>
                <h4>{info.description}</h4>

                <button>{info.price}</button>
              </Menu.Slick>
              
            ))}
          </Menu.Content>

          <h1>HAMBURGUER DE FRANGO</h1>
          <Menu.Content>
            
            {API.map((info, index) => (

              <Menu.Slick key={index}>
                <img src={info.photo} alt={info.name} />
                <h1>{info.name}</h1>
                <h4>{info.description}</h4>

                <button>{info.price}</button>
              </Menu.Slick>
              
            ))}
          </Menu.Content>
      </Menu.Container>
    </>
  )
}