// 1.Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const res = arr.splice(2, 3);
console.log(res);

//2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива
const array = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
if ((array.unshift(array.pop()), array.unshift(array.pop()))) {
  console.log(array);
}

// 3.Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"
const arraySecond = [
  "John",
  "Peter",
  "David",
  "Lambert",
  "Eddie",
  "Janett",
  "Franz",
];
const myArrSecond = arraySecond.splice(4, 2, "Oleg", "Valerchik");
console.log(arraySecond);
//4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
const arrayThree = [
  "John",
  "Peter",
  "David",
  "Lambert",
  "Eddie",
  "Janett",
  "Franz",
];
const reversed = arrayThree.reverse();

reversed.splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan");

console.log(reversed);
// 5.Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)
const arrFour = [
  "John",
  "Peter",
  "David",
  "Lambert",
  "Eddie",
  "Janett",
  "Franz",
];
const arrNextFour = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];
const threeName = arrNextFour.slice(2, 5);
const rest = arrFour.concat(threeName);
console.log(rest);
// Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:
const phraseMama = ["Мама", "мыла", "pаму"];
const otherPhrase =prompt('Пожалуйста введите слово : Машину ,рябину или картину ');
phraseMama.push(otherPhrase.slice(0,otherPhrase.length));
console.log(phraseMama.join(' '));