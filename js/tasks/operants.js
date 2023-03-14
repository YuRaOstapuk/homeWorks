// Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)
const firstNumber = Number(prompt("enter a number"));
const secondNumber = Number(prompt("enter a number"));
const thirdNumber = Number(prompt("enter a number"));
if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  console.log("$(firstNumber)");
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
  console.log("$(secondNumber");
} else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
  console.log("$(thirdNumber)");
}

// Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)
const nextNumber = prompt("Enter a number from 0 to 5");
switch (nextNumber) {
  case "0":
    console.log("zero");
    break;
  case "1":
    console.log("one");
    break;
  case "2":
    console.log("two");
    break;
  case "3":
    console.log("three");
    break;
  case "4":
    console.log("four");
    break;
  case "5":
    console.log("five");
    break;
}

// Дан следующий код:

// let age = 10;

// if (age < 10) {
//     console.log('hi!');
// } else if (age < 20) {
//     console.log('hello!');
// } else {
//     console.log('good day!');
// }

// Необходимо переписать этот код используя тернарный операторge
let age = 10;

console.log(age < 10 ? "hello" : "hi!");
console.log(age < 20 ? "hello!" : "hi!");
console.log(age === 10, "good day !");

// Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b

// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

// Где correctAnswer - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!
const numberA = Number(prompt("enter a number A"));
const numberB = Number(prompt("enter a number B"));
const result = Number(prompt("what is the result of multiplication A * B"));
const correctAnswer = Number(numberA * numberB);
if (result === numberA * numberB) {
  console.log(
    "Great, you entered the correct answer:(${numberA}*${numberB}=${numberA*numberB})"
  );
} else {
  console.log(
    "Attention correct answer is:(${numberA}*${numberB}=${numberA*numberB}"
  );
}
