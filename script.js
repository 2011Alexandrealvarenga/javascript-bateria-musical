// evento entende o que foi pressionado e solto ao digitar
document.body.addEventListener('keyup', (event)=>{
  // identifica qual a tecla pressionada, exemplo keya (tecla a) 
  // console.log(event.code);

  playSound(event.code.toLowerCase());
});

function playSound(sound){
  // sound é a tecla que foi pressionada
  let audioElement = document.querySelector(`#s_${sound}`);

  // se tiver o audio relacionado a tecla vai tocar
  if(audioElement){
    audioElement.play();
  }
}