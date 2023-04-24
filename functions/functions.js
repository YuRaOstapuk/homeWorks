// Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).
function getToggleMe() {
  let real = false;
  return function () {
    real = !real;
    return real;
  };
}
let toggleMe = getToggleMe();
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());

// Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.
function counter() {
  let num = 0;
  return function (element) {
    if (typeof element === "number") {
      num = element;
    }
    num++;
    return num;
  };
}
const num = counter();
console.log(num());
console.log(num(3));
console.log(num());
console.log(num());
console.log(num(8));
console.log(num());
console.log(num(2));

// Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.
// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)
function getClassNameEditor() {
  let cssClass = " ";
  return (className, isAdd) => {
    if (className && isAdd && !cssClass.includes(className)) {
      cssClass = cssClass + ` ${className}`;
    } else if (className && !isAdd) {
      const cssArrClass = cssClass.split(" ");
      const cssFilterClass = cssArrClass.filter(
        (element) => element != className
      );
      cssClass = cssFilterClass.join(" ");
    }
    return cssClass.trim();
  };
}
const classNameEditor = getClassNameEditor();
console.log(classNameEditor());
console.log(classNameEditor("test", true));

console.log(classNameEditor("smth", true));
console.log(classNameEditor("test", false));
console.log(classNameEditor("test", false));

// ======================================================

// Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.
// checkLogin('user-admin', 'admin', itsOk, itsNotOk);
// ---------------------------------------------------------------------

function checkLogin(userName, reallyName, isOk, isNotOk) {
  userName = String(prompt("Enter your name"));
  reallyName = "admin";
  if (userName === reallyName) {
    isOk();
  } else {
    isNotOk();
  }
}

function showCorrectMessage() {
  console.log("Hello Admin");
}

function showIsNotCorrectMessage() {
  console.log("Good luck");
}
checkLogin("user-admin", "admin", showCorrectMessage, showIsNotCorrectMessage);

// ---------------------------------------------------------------

// Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.

// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.
const arrayName = ["Maks", "Igor", "Oleg", "Vika", "Lola"];
function getArrayName(name, callbackOne, callbackTwo) {
  let simpleArray = name.map((element) => element + " Smith");
  let withMr = callbackOne(simpleArray);
  callbackTwo(withMr);
}

function getMrfromArray(arrayName) {
  return arrayName.map((element) => "Mr. " + element);
}
function getAlertArray(arrayName) {
  arrayName.forEach((element) => alert(element));
}

getArrayName(arrayName, getMrfromArray, getAlertArray);

// Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
const arrayNum = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

const getRemove = (massiv) => {
  let count = [];
  let repeatElement = [];
  for (let i = 0; i < arrayNum.length; i++) {
    let num = arrayNum[i];
    count[num] = count[num] ? count[num] + 1 : 1;
    if (count[num] === 2) {
      repeatElement.push(num);
    }
  }
  return repeatElement;
};
let repeatElement = getRemove(arrayNum);
console.log(repeatElement);
// Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.
const arrTwoNum = [1, 2, 3, 4, 5, 6, [9, 0, 23, 4, 1], 5, 73];

// Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

const arrNum = [
  123, 41, 241, 55, 645356, 6544, 1212, 33, 21, 43, 5643, 76, 7, 8, 9,
];
const resultArrNum = arrNum.filter(
  (num) => num >= 10 && (num <= 100) & (num % 2 === 0)
);
console.log(resultArrNum);

// Дан массив объектов:
// С помощью метода reduce() преобразуйте его в объект вида:

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }

// Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)

const fbTeam = [
  {
    playerName: "Messi",
    team: "Barcelona",
  },
  {
    playerName: "Suarez",
    team: "Barcelona",
  },
  {
    playerName: "Ronaldo",
    team: "Juventus",
  },
  {
    playerName: "Buffon",
    team: "Juventus",
  },
  {
    playerName: "Valerchik",
    team: "Vedrich97",
  },
  {
    playerName: "Gonsalo",
    team: "Juventus",
  },
  {
    playerName: "Pedro",
    team: "Chelsea",
  },
  {
    playerName: "Zuma",
    team: "Chelsea",
  },
  {
    playerName: "PSG",
    team: "Rico",
  },
];

const fbPlayersByTeams = fbTeam.reduce((result, player) => {
  if (!result[player.team]) {
    result[player.team] = [];
  }
  result[player.team].push(player);
  return result;
}, {});
console.log(fbPlayersByTeams);
