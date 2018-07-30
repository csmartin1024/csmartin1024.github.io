import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ConnectedRouter } from "react-router-redux";
// import { store, history} from './config/store';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
//         <Route path='/oauth2/callback' exact component={ImplicitCallback}/>
//         <App />
//       </Security>
//     </ConnectedRouter>
//   </Provider>,
// document.getElementById("root")
// );

registerServiceWorker();














