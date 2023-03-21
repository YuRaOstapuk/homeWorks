// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.

let positiveNumbers = 0;
let negativeNumbers = 0;
let equalZero = 0;

for (; (anyNumbers = +prompt("enter any numbers")); ) {
  if (isNaN(anyNumbers) === true) {
    brake;
  }

  anyNumbers = Number(anyNumbers);
  if (anyNumbers < 0) {
    negativeNumbers++;
  }
  if (anyNumbers === 0) {
    equalZero++;
  }

  if (anyNumbers > 0) {
    positiveNumbers++;
  }
}

console.log(
  ` ${positiveNumbers} =positive numbers , ${negativeNumbers} =negative numbers ,  ${equalZero} =equal zero.`
);
// Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.
let summ = 0;
let num = 0;
for (; (enterNumber = prompt("any number")); ) {
  if (isNaN(enterNumber) === true) {
    break;
  }
  if ((enterNumber = Number(enterNumber))) {
    num++;
  }
  summ += enterNumber;
}
console.log(`average of enter number=${summ / num}`);
// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.
let number = 0;
for (let i = 0; i < 5; i++) {
  let enterNumber = Number(
    prompt("please, enter any number greater than the previous one")
  );
  if (number < enterNumber) {
    number = 0;
    number += enterNumber;
  } else {
    console.log("Error");
    break;
  }
}
// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==
let array = ["param"];
const enterNumber = Number(prompt("Enter any number "));
for (i = 0; i < enterNumber; i++) {
  array.push("pam");
}
console.log(array.join("  "));
