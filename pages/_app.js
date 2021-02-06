import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import config from './api/config.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    
    color: ${({ theme }) => theme.colors.colorHeader};
  }
  html, body {
    height: 100%;
  }
  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = config;

// eslint-disable-next-line react/prop-types
export const App = ({ Component, pageProps }) => {
  return (
    <>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
