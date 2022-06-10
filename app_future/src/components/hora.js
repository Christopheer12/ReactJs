function MostrarHora(){
    momentoActual = new Date();
    console.log(MostrarHora);
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();

    horaImprimir = hora +" : " + minuto;
    console.log();


}

export default MostrarHora