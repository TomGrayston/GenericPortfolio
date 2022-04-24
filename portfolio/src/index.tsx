import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './component/styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
