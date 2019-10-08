import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

=======
// import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 338fe5da7a985c7841072cd138d8b9b9d2cfd545

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

