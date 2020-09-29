import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Helmet from "react-helmet";

ReactDOM.render(
    (

        <html>

        <body>
            <React.StrictMode>
         
         <App />
                </React.StrictMode>
        </body>
        </html>
     ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//<Helmet><script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script></Helmet>
serviceWorker.unregister();
