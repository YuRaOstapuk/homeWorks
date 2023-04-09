// Дан случайный массив чисел (создайте самостоятельно). С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.
const array = [1, 12, 3, 41, 22, 28, 9, 16, 18, 243, 244, 21, 6, 2];
const res = array.filter(function (element) {
  if (element % 2 === 0 && element >= 10 && element < 100) {
    return true;
  }
});
console.log(res);

// Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив. С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

// const num = [];
// const counter = 10;
// for (i = 0; i < 10; i++) {
//   const userEnter = +prompt("Enter any number");
//   num.push(userEnter);
// }
// const examinationNum = num.every(
//   (element) => element !== NaN && !isNaN(element) 
// );

// if (examinationNum) {
//   console.log("You only entered numbers");
// } else {
//   console.log("You entered is not only numbers");
// }



//3. Дан массив объектов

// const arr = [
//   {a: 2, b: 1},
//   {a: 5, b: 12},
//   {a: 95, b: 7}
// ]

// Используя ТОЛЬКО методы массивов (циклы запрещены):

//     Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
//     На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:

const arr = [
  {a: 2, b: 1},
  {a: 5, b: 12},
  {a: 95, b: 7}
]
const isValid=arr.every((item)=>item.a>item.b);
console.log(isValid ? 'its valid' : 'its not valid');
const arr2 = [
  {a: 2, b: 1},
  {a: 5, b: 144},
  {a: 95, b: 49}
];
const arrNew=arr2.map((item)=>({...item, b:(item.b**2)}));
console.log(arrNew);