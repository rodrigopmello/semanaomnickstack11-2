import React from 'react';
import ReactDOM from 'react-dom'; //integracao com o navegador

import App from './App'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* index.js é o primeiro arquivo lido, e aí react preenche com seus componentes */
