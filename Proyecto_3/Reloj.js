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