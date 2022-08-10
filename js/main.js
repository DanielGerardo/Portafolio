
const carga = document.querySelector('.carga');
const App = document.querySelector('.App');
const scrollY = document.querySelector('body');

setTimeout(() =>{
  scrollY.style.overflowY = 'visible'
  
},3000)

setTimeout(() =>{
  carga.style.display = 'none'
  App.style.opacity = 1;
},3000)
