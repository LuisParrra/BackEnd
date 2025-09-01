console.log("\n---02-templateString---\n\n")
const firsname = "Luis";
const lasName = "Parra";
console.log(firsname,' ', lasName)

const FullName = `(Nombre completo es: ) ${firsname} ${lasName} `;
console.log(FullName)

//cadena multilinea con backtick o comillas invertidas

const template = `
En este espacio puede agregar cualquier bloque de codigo 

El nombre completo es: ${firsname} ${lasName}
`
console.log(template)

// Expresiones matematicas
console.log(`suma de 2 + 2 = ${2 + 2}`)

let price = 10;
let iva = 0.25;
let total = `total ${(price + (price * iva)).toFixed(2)}`;
console.log(total);

//generar un template 
 let header ="Template String";
 let html_template = `<h2>${header}</h2>`
 console.log(html_template);
console.log("\n---espacioooo---\n\n")
 //otro tamplate de HTML
let tags = ["Template String","JavaScript","ES6"];
for(const tag of tags){
    html_template += `
    <p>Lista de String: </p>
    <li>${tag}</li>`;
}
console.log(html_template);



