// function llamada(){
//     console.log("Hola mundo");
// }

// function llamadora(call){
//     console.log("Dentro de esta funcion llamamos nuestro callback")
// }

// llamdadora(llamada);
setTimeout(() => {
    console.log("1 Esto va primero");
}, 6000)
console.log("2 Esto va segundo");
setTimeout(() => {
    console.log("3 Esto va tercero");
}, 4000)
console.log("4 Esto va cuarto");