import React from 'react';
import db from '../pages/api/config.json';
import { Header } from '../src/Fixed/Header';
import { Contact } from '../src/components/Contact';

export default function Home() {
  const img = db.bgContact;
  return (
    <>
        <Header />
          <Contact.bg>
          <Contact>
            <Contact.Content>
              <Contact.Box>
                <Contact.Wrapper>
                  <h1>WhatsApp</h1>
                  <h4>(61)99178-6805</h4>
                  <h4>(61)99178-6805</h4>
                  <h4>(61)99178-6805</h4>
                  <h4>(61)99178-6805</h4>
                </Contact.Wrapper>

                <Contact.Wrapper>
                  <h1>Telefone</h1>
                  <h4>(61)99178-6805</h4>
                  <h4>(61)99178-6805</h4>
                </Contact.Wrapper>

                <Contact.Wrapper>
                  <h1>Ifood</h1>
                  <h4>Incrível Burguer</h4>
                </Contact.Wrapper>

              </Contact.Box>
            </Contact.Content>
            </Contact>
          </Contact.bg>
    </>
  )
}