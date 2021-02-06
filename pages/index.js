import React from 'react';
import styled from 'styled-components';

import config from './api/config.json';
import { Header } from '../src/Fixed/Header';

const ContainerBg = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${({ img }) => img ? `url(${img})` : '' };
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContainerBlack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);


`;

export default function Home() {
  return (
    <ContainerBg img={config.bg}>
      <ContainerBlack>
      <Header />
      </ContainerBlack>
    </ContainerBg>
  )
}
