import React, { useState, useEffect } from 'react';
import { Header } from '../src/Fixed/Header';
import { Promo } from '../src/components/Promo';
import db from '../pages/api/config.json';
import { falseApiPromo } from '../pages/api/hello';
import api from '../pages/db';

export default function Home() {
  const [promo, setPromo] = useState();
  const img = db.bgMenu;

  useEffect(() => {
    api.get('promo/promoget')
    .then(res => setPromo(res.data));
  }, [promo]);

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
                {!promo ? '' : promo.map((item, index) => {
                  return(
                    <Promo.Div key={index}>
                      <Promo.Column>
                        <img src={item.url} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button>R${item.price}</button>
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