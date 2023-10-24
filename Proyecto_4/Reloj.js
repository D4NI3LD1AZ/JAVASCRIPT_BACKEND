const deg=6;

const horas= document.querySelector('.hora');
const minutos= document.querySelector('.minuto');
const segundos= document.querySelector('.segundo');

setInterval(()=>{
    let tiempo= new Date();
    let hr = tiempo.getHours() *30;
    let mn = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg

    horas.style.transform = `rotate(${(hr) + (mn/12)}deg)`;
    minutos.style.transform = `rotate(${mn}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})

function calcularT(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();  
    let sesion= "AM";
    if (hora > 12){
        sesion= "PM"
        hora = hora - 12;

    }
    hora = hora < 10 ? "0"+ hora: hora;
    minuto = minuto < 10 ? "0"+ minuto: minuto;
    segundo =segundo < 10 ? "0"+segundo:segundo;

    let pantallaR = hora +":"+minuto+":"+segundo +" "+sesion;
    let relojD = document.querySelector(".relojA");
    relojD.innerHTML = pantallaR;
}
setInterval(calcularT,1000);