import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { store } from 'state/store';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import "index.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider, "any");
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <App />
      </Provider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
