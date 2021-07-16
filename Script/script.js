let pagoHora = 0;
let pagoHoraExt= 0;
let totalPagar = 0;
let totalPagarNorm = 0;
let totalPagarExt = 0;

let nombre,horasLab;
const hora = Number(16000);
const horaExt = Number(20000);
const horaTrabSem = '40';

nombre = prompt('Ingrese nombre');
horasLab = Number(prompt('Ingrese horas laboradas en la semana'));

if(horasLab <= '40'){
    pagoHora = horasLab * hora  ;
}
else if (horasLab >'40'){
    pagoHoraExt = (horasLab - '40') * horaExt ;
}
else{
    pagoHora = horasLab * 0;
    alert('El numero de horas ingresadas no es valido');
}

totalPagar= pagoHora + pagoHoraExt;


alert(` El trabajador ${nombre} trabajo ${horasLab} horas
y su total a pagar es ${totalPagar}`);