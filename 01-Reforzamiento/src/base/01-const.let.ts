const firsname = "luis";
const lastname = "parra";
let secondname = "carlos";
//console.log("nombre "+firsname);
//console.log("apellido "+lastname);

console.log('Iniciao de programa');
setTimeout(() =>{
    console.log('primer Timeout');
}, 3000);
setTimeout(() =>{
    console.log('segundo Timeout');
}, 0);
setTimeout(() =>{
    console.log('tercer Timeout');
}, 0);
console.log('fin de programa');