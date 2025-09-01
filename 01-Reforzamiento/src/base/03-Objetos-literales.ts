console.log("\n---03-Ocjetos-Literales---\n\n")

//crear un objeto literal 
const persona = {
    firsName: "Luis",
    lastName: "Parra",
    age: 23,
}
//imprimir el objeto literal
console.log(persona);
console.log("Nombre: ", persona.firsName);
console.log("Apellido: ", persona.lastName);
console.log("Edad: ", persona.age);

//modificar el objeto literalq
persona.firsName = "Pedro";
persona.lastName = "Perez";
persona.age = 30;
console.log("\nPersona Modificada: ", persona);
console.log("Nombre: ", persona.firsName);
console.log("Apellido: ", persona.lastName);
console.log("Edad: ", persona.age);

/*esto no se puede hacer
persona = {
    firsName: 'Juan',
    lastName: 'Lopez',
    age = 40    
}
*/
//crear un objeto denominda studen 
// y que apunte al objeto persona
const student = persona;
console.log("\nStudent: ", student);
//modificar el objeto student
student.firsName = "Criatiam";
student.lastName = "Suarez";
student.age = 25;
console.log("\nStudent Modificado: ", student);
console.log("\nPersona despues de modificar student: ", persona);

//objeto diferente a partir del objero persona
//objeto perosna utilizando spread operator
const teacher = { ...persona, adress:{
    street: "Calle 123",
    city: "Bogota", 
    country: "Colombia",
    postalCode: "110111"
} };
console.log("\nTeacher: ", teacher);
//modificar el objeto teacher
teacher.firsName = "Ana";
teacher.lastName = "Gomez";
teacher.age = 40;
console.log("\nTeacher Modificado: ", teacher);
console.log("\nPersona despues de modificar teacher: ", persona);
console.log("\nStudent despues de modificar teacher: ", student);

// crear un objeto a partir del objeto persona 
//denomninada employee y agregara la propiedad
//adress:{postalCode, city, country }
const employee = { ...persona, adress: { postalCode: "83117", city: "hermosillo" } };
console.log("\nEmployee: ", employee);
//modificar el objeto employee
employee.firsName = "Carlos";
employee.lastName = "Ramirez";
employee.age = 35;
employee.adress.postalCode = "83118";
employee.adress.city = "Nogales";
console.log("\nEmployee Modificado: ", employee);
console.log("\nPersona despues de modificar employee: ", persona);
console.log("\nStudent despues de modificar employee: ", student);
console.log("\nTeacher despues de modificar employee: ", teacher);

const newTeacher = { ...teacher };
newTeacher.adress .postalCode = "8105";

const otherTeacher = structuredClone(teacher);
otherTeacher.adress .postalCode = "9999";
console.log("\nTeacher despues de modificar newTeacher y otherTeacher: ", teacher);
