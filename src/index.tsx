import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import Theme from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);