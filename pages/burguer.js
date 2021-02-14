import React from 'react';
import { Menu } from '../src/components/Menu/Open';
import { Header } from '../src/Fixed/Header';
import {falseApi} from '../pages/api/hello';
import db from '../pages/api/config.json';


export default function Home() {
  const API = falseApi;
  const img = db.bgMenu;
  
  return (
    <>
      <Header />
      <Menu.Container backgroundImg={img}>
        <Menu.Black>
          <Menu.Content>
          <h2>HAMBURGUER</h2>
            {API.map((info, index) => (
              <Menu.Wrap key={index}>
                <Menu.column1>
                  <h4>{info.name}</h4>
                  <img src={info.photo} alt={info.name} />
                </Menu.column1>
                <Menu.column2>
                  <p>{info.description}</p>
                  <button>{info.price}</button>
                </Menu.column2>
              </Menu.Wrap>
            ))}
          </Menu.Content>
        </Menu.Black>
      </Menu.Container>
    </>
  )
}