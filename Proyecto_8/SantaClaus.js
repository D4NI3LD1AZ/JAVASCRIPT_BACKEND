function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante/ 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante/ (3600 * 24))).slice(-2);
return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante) {
    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;
        const e = document.getElementById("mensaje");

        mensaje = "Faltan Para Navidad"
        e.innerHTML = mensaje;
        let santa = "off";   
        let santaStop = document.getElementById("santaInmo")
        let sonido = new Audio("../sound/Dancing.mp3")

        if (t.tiempoFaltante <1) {
            dias.innerHTML = "00";
            horas.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            clearInterval(tiempoActual);
            mensaje = "¡Feliz Navidad!"
            e.innerHTML = mensaje;

            santaStop.classList.add("on");
            iniciar.classList.add("botonI");
            detener.classList.add("botonI");

            if (santa == "off") {
                iniciar.addEventListener('click', ()=>{
                    santaStop.classList.add("on");
                    sonido.play();
                })
                detener.addEventListener('click', ()=>{
                    sonido.pause();
                })
            }    
        }
    }, 1000)
};
    
cuentaRegresiva('Nov 21 2023 16:30:00 GMT-0500', 'cuentaRegresiva');