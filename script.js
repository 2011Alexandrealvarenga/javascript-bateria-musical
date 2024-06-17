// evento entende o que foi pressionado e solto ao digitar
document.body.addEventListener('keyup', (event)=>{
  // identifica qual a tecla pressionada, exemplo keya (tecla a) 
  // console.log(event.code);

  playSound(event.code.toLowerCase());
});

// pega o que foi digitado 
document.querySelector('.composer button').addEventListener('click', ()=>{
  let song = document.querySelector('#input').value;
  if(song !==''){

    // transforma em array
    let songArray = song.split('');
    playComposition(songArray);
  }
});

function playSound(sound){
  // sound é a tecla que foi pressionada
  let audioElement = document.querySelector(`#s_${sound}`);

  // pega a tecla digitada
  let keyElement = document.querySelector(`div[data-key="${sound}"]`)

  // se tiver o audio relacionado a tecla vai tocar
  if(audioElement){
    // insere um valor no tempo
    audioElement.currentTime = 0;
    audioElement.play();
  }

  // verifica a tecla digitada e adiciona a classe
  if(keyElement){
    keyElement.classList.add('active');
    setTimeout(()=>{
      keyElement.classList.remove('active');

    },300);
  }
}
// executa a musica com intevalos
function playComposition(songArray){
  let wait = 0;
  for(let songItem of songArray){
    setTimeout(()=>{
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  }
}