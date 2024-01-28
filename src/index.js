import populate from './populate-content.js';
import about from './load-about.js';
import menu from './load-menu.js';
import loadLogo from './load-logo.js';

console.log("Hi, I am from index.js!");
loadLogo();
populate();


//next: set event listeners on nav buttons to wipe div#content 
// and run the appropriate tab module.

// nav buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener('click', populate);
menuBtn.addEventListener('click', menu)
aboutBtn.addEventListener('click', about);


