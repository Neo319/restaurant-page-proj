import populate from './populate-content.js';
import about from './load-about.js'

console.log("Hi, I am from index.js!");

populate();


//next: set event listeners on nav buttons to wipe div#content 
// and run the appropriate tab module.

// nav buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

aboutBtn.addEventListener('click', about);
