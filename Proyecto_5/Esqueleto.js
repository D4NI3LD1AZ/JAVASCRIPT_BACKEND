let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio("../Sound/botonbailar.mp3");
let botonAudio = new Audio("../Sound/audio.mp3");


function bailar(){
    if(esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
    }
    else{
        esqueleto ="off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
    }
}