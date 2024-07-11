import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fixtures.css';
import './results.css';
import './tables.css'
import './injury.css'
import './stats.css'
import './news.css'
import './watchLive.css'
import './video.css'
import './tickets.css'
import './clubs.css'
import './players.css'
import './awards.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
