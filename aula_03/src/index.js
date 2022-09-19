import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.module.scss';

// Pages
import { Home } from './pages/Home';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Home/>
)