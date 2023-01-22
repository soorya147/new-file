
function start(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key  =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    //console.log(e);
    if(!audio){
      return;// stop the function from running all together
    }
    audio.currentTime = 0; //rewind to  the start
    audio.play();
    key.classList.add("playing");
} 

    function removeTransition(e){
       if(e.propertyName !== 'transform'){
          return;// skip if it is not a transform 
       }
       this.classList.remove('playing');    
    }
     

   const keyEl = document.querySelectorAll(".key");
    keyEl.forEach((keys)=>{
      keys.addEventListener("transitionend",removeTransition)
    });
    window.addEventListener("keydown",start);
     