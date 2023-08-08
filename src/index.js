import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App'


/* 
                  Project Outline

1. React and FireBase is used for front end.
      Where Firebase is used for hosting, Deploy and authentication.
2. Node.js, express.js and MongoDB is used as Backend.


*/


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
);

