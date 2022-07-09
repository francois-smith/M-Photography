import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

let lastScroll = window.scrollY;
window.onscroll = function() {
	if(window.scrollY > 50) {
		document.querySelector(".bm-burger-button").style.opacity = "0";
	}
	else {
		document.querySelector(".bm-burger-button").style.opacity = "1";
	}
	lastScroll = window.scrollY;
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App/>
);

