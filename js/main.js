
const carga = document.querySelector('.carga');
const App = document.querySelector('.App');
const body = document.querySelector('body');
const barHabilidades = document.getElementById('barHabilidades');
setTimeout(() =>{
  body.style.overflowY = 'visible'
  
},3000)

setTimeout(() =>{
  carga.style.display = 'none'
  App.style.opacity = 1;
},3000)

const barScrum = document.getElementById("scrum");

  barScrum.style.animation = 'mostarArriba 5s';


