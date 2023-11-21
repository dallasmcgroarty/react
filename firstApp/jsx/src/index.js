// 1. import React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

// 2. get reference to div id root
const el = document.getElementById('root');

// 3. tell react to take control of that element
const root = ReactDom.createRoot(el);

// 4. show component on screen
root.render(<App />);