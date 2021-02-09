import React from 'react';
import { Header } from '../src/Fixed/Header';
import { Promo } from '../src/components/Promo';
import db from '../pages/api/config.json';
import { falseApiPromo } from '../pages/api/hello';

export default function Home() {
  const Api = falseApiPromo;
  const img = db.bgMenu;
  return (
    <>
      <Header />  
      <Promo>
        <Promo.Img backgroundImg={img}>
          <Promo.black>
            <Promo.Content>
              <Promo.Box>
              <h1>PROMOÇÃO</h1>
              <Promo.Align>
                {Api.map((item, index) => {
                  return(
                    <Promo.Div key={index}>
                      <Promo.Column>
                        <img src={item.photo} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button>{item.price}</button>
                      </Promo.Column>
                    </Promo.Div>
                  );
                })}
                </Promo.Align>
              </Promo.Box>
            </Promo.Content>
          </Promo.black>
        </Promo.Img>
      </Promo>
    </>
  )
}