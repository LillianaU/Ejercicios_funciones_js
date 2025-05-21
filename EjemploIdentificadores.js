/// declaraciones de identificadores
/*
identificador esta compuesto por variables y constantes y estas puede ser de  diferentes tipos:
primitivos
numericos: reales y entero 
texto: carateres , cadena
booleanos: falso o verdadero , 0 falso y 1 verdadero
no primitivos:
arreglos: vectores y matrices
estructura de datos:
listas, pilas colas, diccionarios, map ...
*/
// var : variables locales años 90
// let: variables locales
// const: son constantes no cambian
// ejemplo de condicional simple
 // queremos sa=bes si una persona es mayor de edad
 var edad=18, reserva= false
 /*if(edad>=18){ 
    console.info("es mayor de edad")
 }else{
    console.log("es menor de edad")
 }
if(edad >=18 && reserva==true){
    console.log("puedes pasar a la discoteca tutaina")
}*/
if(edad >=18){
    console.log(" cumples la edad para ingresar discoteca tutaina")
    if(reserva==true){
        console.log("puedes pasar a la discoteca  tutaina por que tienes reserva")
    }else{
        console.log("No puedes pasar a la discoteca  tutaina por que tienes reserva")
        }

} else{
    console.log("No cumple la edad")
}


