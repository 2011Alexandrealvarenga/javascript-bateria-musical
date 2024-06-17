// evento entende o que foi pressionado e solto ao digitar
document.body.addEventListener('keyup', (event)=>{
  // identifica qual a tecla pressionada, exemplo keya (tecla a) 
  console.log(event.code);
})