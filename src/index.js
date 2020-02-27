import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { fbConfig } from 'fb'
import {
  FirebaseAppProvider,
  SuspenseWithPerf
} from 'reactfire'
import { AdaSpinner } from 'components/UI/common'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={fbConfig}>
    <SuspenseWithPerf fallback={<AdaSpinner />}>
      <App />
    </SuspenseWithPerf>
  </FirebaseAppProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
