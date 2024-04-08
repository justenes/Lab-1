const studentModule = require(.studentModule);

const fullName = studentModule.getStudentFullName();
const studentId = studentModule.getStudentId();

const message = `Moje imie ${fullName}. Numer albumu ${studentId}`;
console.log(message);
