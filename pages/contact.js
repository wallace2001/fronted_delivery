import React, {useState, useEffect} from 'react';
import db from '../pages/api/config.json';
import { Header } from '../src/Fixed/Header';
import { Contact } from '../src/components/Contact';
import {api} from '../db';

export default function Home() {
  const [telphone, setTelphone] = useState();
  const [whats, setWhats] = useState();
  const [ifood, setIfood] = useState();

  useEffect(() => {
    api.get('/contact/contactgettel')
    .then(res => setTelphone(res.data));
  }, [telphone]);

  useEffect(() => {
    api.get('/contact/contactgetwhats')
    .then(res => setWhats(res.data));
  }, [whats]);
  
  useEffect(() => {
    api.get('/contact/contactgetifood')
    .then(res => setIfood(res.data));
  }, [ifood]);

  const img = db.bgMenu;
  return (
    <>
        <Header />
        <Contact>
          <Contact.bg backgroundImg={img} />
            <Contact.Content>
              <Contact.Box>
                <Contact.Wrapper>
                  <h1>WhatsApp</h1>
                  {!whats ? '' : whats.map((item, index) => {
                    return(
                      <h4 key={index}>{item.info}</h4>
                    );
                  })}
                </Contact.Wrapper>

                <Contact.Wrapper>
                  <h1>Telefone</h1>
                  {!telphone ? '' : telphone.map((item, index) => {
                    return(
                      <h4 key={index}>{item.info}</h4>
                    );
                  })}
                </Contact.Wrapper>

                <Contact.Wrapper>
                  <h1>Ifood</h1>
                  {!ifood ? '' : ifood.map((item, index) => {
                    return(
                      <a key={index} href={item.info} target="_blank">{item.info}</a>
                    );
                  })}
                </Contact.Wrapper>

              </Contact.Box>
            </Contact.Content>
            </Contact>
    </>
  )
}