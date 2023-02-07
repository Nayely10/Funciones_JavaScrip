/*//crear tarea pedir nombre
function pedirNombre(){
    return  prompt("digite su nombre");
}
//ejecutar tarea
var nombre = pedirNombre();
//procedimiento sin tranformar datos
function mostarNombre( nom ){
    document.write("su nombre es:"+nom)
}

mostarNombre( nombre );
*/

/*
function suma(n1,n2){
    return n1 + n2;
}
var numero1 = parseInt(prompt("Ingrese numero 1"));
var numero2 = parseInt(prompt("Ingrese numero 2"));
var suma1 = suma(numero1,numero2);
var suma2 = suma(5,8);
var suma3 = suma(10,20);


document.write("la suma es:"+suma1+"<br>");
document.write("la suma es:"+suma2+"<br>");
document.write("la suma es:"+suma3+"<br>");
*/


/*function multiOperacion(n1,n2,signo){
    if(signo=="+"){
        return n1 + n2;
    }else if(signo=="-"){
        return n1 - n2;
    }else if(signo=="*"){
        return n1 * n2;
    }else{
        return n1 / n2;
    }

}
var numero1 = parseInt(prompt("Ingrese numero 1"));
var numero2 = parseInt(prompt("Ingrese numero 2"));
var signo = prompt("digite signo de la operacion")
document.write("el resuntado de la operacion es "+multiOperacion(4,5,"+")+"<br>");
document.write("el resuntado de la operacion es "+multiOperacion(4,5,"-")+"<br>");
document.write("el resuntado de la operacion es "+multiOperacion(4,5,"*")+"<br>");
document.write("el resuntado de la operacion es "+multiOperacion(4,5,"/")+"<br>");
*/

//punto 1
/*var altura =parseInt(prompt("Digite altura de la figura"));
var base =parseInt(prompt("Digite base de la figura"));

function SuperficieFigura( a, b){
    return a * b ;
}
var  Superficie =SuperficieFigura(altura, base)
document.write("La superficie de altura  es:"+altura+ "y base" +base+"es:"+Superficie);
*/

//punto 2
var kilometros =parseInt(prompt("digite kilometros por hora"));
function convertirMetros(k) {
    return k * 1000;

}

var metros = convertirMetros(kilometros);
document.write(kilometros+"kilometros son"+metros+"metros"+"<br>");


var kilometros =parseInt(prompt("digite kilometros por hora"));
function convertirMillas(K) {
    return K / 1.609344;
}
var Millas = convertirMillas (kilometros);
document.write(kilometros+"kilometros son"+Millas+"Millas"+"<br>");

//punto 3
var radio =parseInt(prompt("Digite el radio del circulo"))
function perimetroCirculo(r){
        return 2 *PI * r;
}

var perimetro = perimetroCirculo(radio);
document.write(radio+"radio son "+perimetro+"perimetro del circulo");