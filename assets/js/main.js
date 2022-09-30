
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

const equipo = document.getElementById("equipo");
const perseverancia = document.getElementById("perseverancia");
const aprendizaje = document.getElementById("aprendizaje");
const orientacion = document.getElementById("orientacion");
const scrum = document.getElementById("scrum");
const mvc = document.getElementById("mvc");
const mvp = document.getElementById("mvp");




function mostrarBarras(){
  let scrollTop = document.documentElement.scrollTop;
   
      if(250 < scrollTop && 800 > scrollTop){
        equipo.style.animation = 'mostarBarras 3s';
        perseverancia.style.animation = 'mostarBarras 3.2s';
        aprendizaje.style.animation = 'mostarBarras 3.4s';
        orientacion.style.animation = 'mostarBarras 3.6s';
        scrum.style.animation = 'mostarBarras 3.8s';
        mvc.style.animation = 'mostarBarras 4s';
        mvp.style.animation = 'mostarBarras 4.2s';
       
      }else{
        equipo.style.animation = 'none';
        perseverancia.style.animation = 'none';
        aprendizaje.style.animation = 'none';
        orientacion.style.animation = 'none';
        scrum.style.animation = 'none';
        mvc.style.animation = 'none';
        mvp.style.animation = 'none';
      }
    
  }
  
  window.addEventListener('scroll',mostrarBarras);




  
