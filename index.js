import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { WalletProvider } from './wallet';

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
