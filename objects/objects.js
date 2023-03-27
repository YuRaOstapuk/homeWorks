// С помощью деструктуризации запишите в отдельны переменные: 1.1 Название города в котором находится авто 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 1.3 Поле high, объекта price 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида:
const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "Boston",
        street: {
          name: "pushkina",
          number: 2,
        },
      },
    },
    region: ["Iowa", "Texas", "California"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      high: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
  },
};
// 1.1
const {
  adress: {
    country: {
      city: { name: homeTownCityCar },
    },
  },
} = car;
//  1.2
const {
  adress: {
    region: [, , , fourRegion = "Arizona"],
  },
} = car;
// 1.3
const {
  specs: {
    price: { high: newHigh },
  },
} = car;
// 1.4
const {
  specs: { fuelConsumption = { city: 12, mix: 10, country: 7 } },
} = car;

///////////////////////////////////////////////////


const student = { math: 5, biology: 3, language: 2, isOboltus: true };
for (let number in student) {
  if (typeof student[number] === 'number') {
    student[number] *= 2;
  }
  
};
// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента. Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.
let sum =0;
let result =0;
for(let number2 in student){
    if (typeof student[number2]==='number'){
        sum+=student[number2];
        result++;
    }else if(sum/result>5){
        student[number2]=Boolean(false);
    }
}


console.log(student);

