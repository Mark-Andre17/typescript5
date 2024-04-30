// 1
let student: { 
    name:string,
    age:number
};
student = { name:'andrei', age:20 };
let newStudent = student;
// newStudent = {name:'andrei'};
console.log(student);
// 2
interface Animal {
    name:string
    age:number
};
let dog:Animal = {name: 'Archi', age: 7};
console.log(dog);
console.log(dog.name);
console.log(dog.age);
// let fish:Animal = {name: 'Flipper', age: 7, type: 'fish'};
// 3
interface Employee {
    name:string 
    age:number 
    department?:string
} 
let worker: Employee = {name: 'John', age: 30};
console.log(worker);
// 4
interface Student {
    name: string
    grades: number[]
}
let students:{name:string,grades:number[]}[] = [];
let student1: Student = {name: 'John', grades: [10, 9]};
let student2: Student = {name: 'Alex', grades: [5, 6]};
let student3: Student = {name: 'Jessy', grades: [7, 8]};
// let student4: Student = {name: 'Jessy', grades: [7, 8, 9, 'name']}
students.push(student1, student2, student3);
console.log(students);
// 5
function printBookInfo(book: {title: string, author: string, pages: number}) {
    return `Вы читали книгу '${book.title}' написанную автором ${book.author} на странцие ${book.pages}`
}
let warAndPeace: {title: string, author: string, pages: number} = {
    title: 'Война и мир',
    author: 'Толстой Л.Н.',
    pages: 1229
}
let сrimeAndPunishment: {title: string, author: string, pages: number} = {
    title: 'Преступление и наказание',
    author: 'Достоевский Ф.М.',
    pages: 263
};
console.log(printBookInfo(warAndPeace));
console.log(printBookInfo(сrimeAndPunishment));


