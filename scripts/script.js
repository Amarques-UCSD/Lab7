// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
const setStateSingle = router.setStateSingle;
const getState = router.getState;

// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
        
      });
    });
});

document.getElementsByTagName("img")[0].addEventListener("click", () => { //selecting settings button
  //console.log("hello");
  setState("settings");
});

document.getElementsByTagName("h1")[0].addEventListener("click", () => { //selecting mainpage
  //console.log("hello");
  if (getState() != "homepage") {
    setState("homepage");
  }
});


document.addEventListener("click", (event) => {
  if(event.target.tagName == "JOURNAL-ENTRY")
    setState("single-entry", event.target)
});
