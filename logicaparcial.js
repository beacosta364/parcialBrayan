//declaracion de variables
var x,tipoOperacion;
//solicitud de dato numerico
x=parseInt(prompt("escriba un numero entre 1 y 999"));
//operacion para numeros de 1 digito
if (x >=1 && x<=9){
    x=x*x
    tipoOperacion="el numero se elevo al cuadrado"
}
//operacion para numeros de 2 digitos
else if (x>=10 && x<=99){
    x=x*2
    tipoOperacion="el numero se multiplico por 2"
}
//operacion para numeros de 3 digitos
else if(x>=100 && x<=999){
    x=x-100
    tipoOperacion="al numero se le resto 100"
}else{
    //espacio por si el numero no cumple con las 
    //condiciones dadas para el programa
    x= "Número no válido"
    tipoOperacion=" "
}
//presentar el resultado
alert("el resultado es "+x+", "+tipoOperacion);

//Brayan Estein Acosta Achinte CC=1107509939