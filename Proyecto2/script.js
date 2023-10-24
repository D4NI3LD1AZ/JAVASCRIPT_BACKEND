function calcularT(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();   

    hora = hora < 10 ? "0"+ hora: hora;
    minuto = minuto < 10 ? "0"+ minuto: minuto;
    segundo =segundo < 10 ? "0"+segundo:segundo;

    let pantallaR = hora +":"+minuto+":"+segundo;
    let relojD = document.querySelector(".reloj");
    relojD.innerHTML = pantallaR;
}
setInterval(calcularT,1000);