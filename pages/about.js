import React from 'react';
import { Header } from '../src/Fixed/Header';
import {About} from '../src/components/About';
import db from '../pages/api/config.json';

export default function Home() {
  const img = db.bgMenu;
  return (
    <>
        <Header />
        <About>
          <About.Wrap>
            <About.Img backgroundImg={img} />
            <About.Content>
              <h1>SOBRE NÓS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus elit eleifend enim pulvinar, quis efficitur ex elementum. Pellentesque quis ligula hendrerit, bibendum mauris eget, ultricies metus. Mauris aliquet lorem in risus porttitor efficitur. Nullam eu turpis et ligula molestie mollis. Duis finibus dolor vitae dolor tempus, at lobortis nunc ultrices. Phasellus vitae erat facilisis orci convallis feugiat. Sed in mauris eu nulla malesuada scelerisque. Phasellus pharetra quis odio at efficitur. Suspendisse nec consequat arcu. In mauris purus, aliquam et iaculis pretium, ultricies nec enim. Aenean nec augue viverra, posuere lacus sed, finibus tellus. Nullam vulputate lorem ut ex ullamcorper lacinia. Ut suscipit quam arcu, nec laoreet dolor vulputate sit amet. Pellentesque gravida eget nibh eu pharetra.</p>
              <button>INCRÍVEL</button>
            </About.Content>
          </About.Wrap>
        </About>
    </>
  )
}