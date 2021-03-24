import React, {useState, useEffect} from 'react';
import { Header } from '../src/Fixed/Header';
import {About} from '../src/components/About';
import db from '../pages/api/config.json';
import api from '../pages/db';

export default function Home() {
  const [about, setAbout] = useState();
  useEffect(() => {
    api.get('/about/getabout')
    .then(res => setAbout(res.data));
  }, [about])
  
  const img = db.bgMenu;
  return (
    <>
        <Header />
        <About>
          <About.Wrap>
            <About.Img backgroundImg={img} />
            <About.Content>
              {!about ? '' : about.map((item, index) => {
                return(
                  <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                );
              })}
              <button>INCRÍVEL</button>
            </About.Content>
          </About.Wrap>
        </About>
    </>
  )
}