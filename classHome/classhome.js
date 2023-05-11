// 1.Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
    const expirience = stack.forEach((stack) => {
      console.log(`${this.name} is coding ${this.stack}`);
    });
  }
  code() {
    this.stack.forEach((techology) => {
      console.log(`${this.name} code on ${techology}`);
    });
  }
  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
  static getSeniorDeveloper(developers) {
    return developers.filter((arr) => {
      return arr.stack.lenght > 4;
    });
  }
}

// const programmer = new Programmer("Oleg ", ["Python", " PHP", "Java"]);
// programmer.code();
// programmer.hello();
//2.Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.

const developers = [
  new Programmer("Igor", ["Java", "C++", "Ruby", "Go"]),
  new Programmer("Alex", ["JS", "C++", "Ruby", "Go"]),
  new Programmer("Bob", ["JS", "Java", "Ruby", "Go"]),
  new Programmer("Maks", ["JS", "Java", "C++", "Go"]),
  new Programmer("Lena", ["JS", "Java", "C++", "Ruby"]),
  new Programmer("Ibragim", ["JS", "Go"]),
  new Programmer("Lola", ["JS", "Ruby", "Go"]),
  new Programmer("Valera", ["Java", "C++", "Ruby"]),
  new Programmer("Vova", ["Go", "C++"]),
  new Programmer("Shon", ["Ruby", "Go"]),
];
console.log(Programmer.getSeniorDeveloper(developers));

// 4.Создать конструктор Car, который принимает параметры model, color, price. Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями. Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
  run() {
    console.log(`Model ${this.model} Color ${this.color}  is running `);
  }
}
const randomCar = new Car("VW", "Red", 2000);

randomCar.run();

// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.

// Создайте три линии.
// Вычислите их длины с помощью функции
// Проверьте, могут ли три линии сформировать треугольник Помните: Длину линии можно найти по теореме Пифагора. Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const p1 = new Point(1, 4);
const p2 = new Point(91, 41);
const p3 = new Point(1, 41);
const p4 = new Point(21, 61);
const p5 = new Point(22, 11);
const p6 = new Point(1, 51);

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  get lenght() {
    const katet1 = this.p1.x - this.p2.x;
    const katet2 = this.p1.y - this.p2.y;
    return Math.sqrt(katet1 ** 2 + katet2 ** 2);
  }
  static canLineFormAtriangle(line1, line2, line3) {
    return (
      line1.lenght + line2.lenght > line3.lenght &&
      line2.lenght + line3.lenght > line2.lenght &&
      line3.lenght + line1.lenght > line1.lenght
    );
  }
}
const line1 = new Line(p1, p2);
const line2 = new Line(p3, p4);
const line3 = new Line(p5, p6);
console.log(line1, line2, line3);
// Создать класс Timer, инстанс которого запускает таймер и выводит в консоль прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер а также методом .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать несколько таймеров и убедится в том, что они работают независимо друг от друга. останавливайте таймер через некоторое время после запуска с помощью setTimeout()
class Timer {
  constructor() {
    this.invalidID = null;
    this.rime = 0;
  }
  start() {
    this.invalidID = setInterval(() => {
      console.log(++this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.invalidID);
  }
  reset() {
    this.time = 0;
  }
}

const timer = new Timer();
timer.start();
setTimeout(() => {
  timer.reset();
}, 5000);
setTimeout(() => {
  timer.stop(), 10000;
});
console.log();
// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц
class Book {
  constructor(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
  }
}
const arrBook = [
  new Book("Alex", "Wild River", 90),
  new Book("Lola", "Sweet life", 96),
  new Book("Igor", "Take care friend", 60),
  new Book("Kostia", "I am happy", 80),
  new Book("Aleaksa", "Honey", 120),
  new Book("Victoria", "My life", 210),
  new Book("Jenia", "My road in IT", 410),
  new Book("Vlad", "My parents", 76),
  new Book("Olia", "Good idea", 50),
  new Book("Valera", "Travel in New York", 40),
];
function getBiggerBook() {
  let maxPages = 0;
  let bigBook = null;
  for (let i = 0; i < arrBook.length; i++) {
    if (arrBook[i].pageAmount > maxPages) {
      maxPages = arrBook[i].pageAmount;
      bigBook = arrBook[i];
    }
    
  }
  return bigBook;
}
bigBook = getBiggerBook(arrBook);
console.log(bigBook);


