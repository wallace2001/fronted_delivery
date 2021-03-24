import React, { useState, useEffect } from 'react';
import { Menu } from '../src/components/Menu/Open';
import { Header } from '../src/Fixed/Header';
import {falseApi} from '../pages/api/hello';
import db from '../pages/api/config.json';
import api from '../pages/db';


export default function Home() {
  const [burguer, setBurguer] = useState();
  const teste = falseApi;
  const img = db.bgMenu;

  useEffect(() => {
    api.get('description/descriptionget')
    .then(res => {
      setBurguer(res.data);
    });
  }, [burguer]);



  return (
    <>
      <Header />
      <Menu.Container backgroundImg={img}>
        <Menu.Black>
          <Menu.Content>
          <h2>HAMBURGUER</h2>
            {!burguer ? '' : burguer.map((info, index) => (
              <Menu.Wrap key={index}>
                <Menu.column1>
                  <h4>{info.name}</h4>
                  <img src={info.url} alt={info.name} />
                </Menu.column1>
                <Menu.column2>
                  <p>{info.description}</p>
                </Menu.column2>
                <Menu.column3>
                  <button>R${info.price}</button>
                </Menu.column3>
              </Menu.Wrap>
            ))}
          </Menu.Content>
        </Menu.Black>
      </Menu.Container>
    </>
  )
}