// 1
var student;
student = { name: 'andrei', age: 20 };
var newStudent = student;
// newStudent = {name:'andrei'};
console.log(student);
;
var dog = { name: 'Archi', age: 7 };
console.log(dog);
console.log(dog.name);
console.log(dog.age);
var worker = { name: 'John', age: 30 };
console.log(worker);
var students = [];
var student1 = { name: 'John', grades: [10, 9] };
var student2 = { name: 'Alex', grades: [5, 6] };
var student3 = { name: 'Jessy', grades: [7, 8] };
// let student4: Student = {name: 'Jessy', grades: [7, 8, 9, 'name']}
students.push(student1, student2, student3);
console.log(students);
// 5
function printBookInfo(book) {
    return "\u0412\u044B \u0447\u0438\u0442\u0430\u043B\u0438 \u043A\u043D\u0438\u0433\u0443 '".concat(book.title, "' \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u0440\u043E\u043C ").concat(book.author, " \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0446\u0438\u0435 ").concat(book.pages);
}
var warAndPeace = {
    title: 'Война и мир',
    author: 'Толстой Л.Н.',
    pages: 1229
};
var сrimeAndPunishment = {
    title: 'Преступление и наказание',
    author: 'Достоевский Ф.М.',
    pages: 263
};
console.log(printBookInfo(warAndPeace));
console.log(printBookInfo(сrimeAndPunishment));
