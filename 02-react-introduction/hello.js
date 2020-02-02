
// create hello world as a SPA
// we need to create the DOM on our own JS

const h1 = document.createElement('h1');
h1.innerText = "hello world from js";

const container = document.getElementById('container');
container.appendChild(h1);