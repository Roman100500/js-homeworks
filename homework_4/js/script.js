// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

/* 
for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 == 1) {
    console.log(`${i} - нечетное число`);
  } else {
    console.log(`${i} - четное число`);
  }
}
*/

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

/* 
const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3, 2);
console.log(arr2);
*/

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и
// создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

/* 
function randomNumbers(min, max) {
  let randomNumber = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  if (randomNumber === -0) {
    randomNumber = 0;
  }
  return randomNumber;
}
let sum = 0;
let min;
let numberThree = false;
const arr3 = [];
for (let i = 0; i < 5; i++) {
  arr3[i] = randomNumbers(0, 9);
  sum += arr3[i];
  if (i === 0) {
    min = arr3[0];
  } else if (min > arr3[i]) {
    min = arr3[i];
  }
  if (arr3[i] === 3) {
    numberThree = true;
  }
}
console.log(
  `Массив: [${arr3}]\nСумма элементов: ${sum}\nМинимальное число: ${min}\n` +
    (numberThree === true ? `В массиве есть число 3` : `В массиве нет числа 3`)
);
*/

//  Задание 4. *Необязательное
// Необходимо вывести горку в консоль (используя цикл for), как показано
// на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

/* 
let n = "";
for (let i = 0; i < 20; i++) {
  n += "x";
  console.log(n);
}
*/
