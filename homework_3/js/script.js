// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

/* 
const cubeNumber = (number) => number ** 3;
const firstNumber = cubeNumber(3);
const secondNumber = cubeNumber(2);
console.log(firstNumber + secondNumber);
*/

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

/* 
const userNumber = prompt("Input number");
function netIncome(number) {
  if (isNaN(number)) {
    return "Значение задано неверно";
  }
  return `"Размер заработной платы за вычетом налогов равен ${number * 0.87}`; // я так понял 13% - это налоги
}
console.log(netIncome(userNumber));
*/

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// 1 вариант: если NaN, Infinity не считаем:

/* 
const userFirstNumber = prompt("Input a first number");
const userSecondNumber = prompt("Input a second number");
const userThirdNumber = prompt("Input a third number");
const maxNumber = (a, b, c) =>
  `Максимальное значение среди этих чисел: ${Math.max(a, b, c)}`;
console.log(maxNumber(userFirstNumber, userSecondNumber, userThirdNumber));
*/

// 2 вариант: если NaN, Infinity считаем:

/* 
const userFirstNumber = prompt("Input a first number");
const userSecondNumber = prompt("Input a second number");
const userThirdNumber = prompt("Input a third number");
const maxNumber = (a, b, c) => {
  if (!isFinite(Math.max(a, b, c))) {
    return "Значение задано неверно";
  }
  return `Максимальное значение среди этих чисел: ${Math.max(a, b, c)}`;
};
console.log(maxNumber(userFirstNumber, userSecondNumber, userThirdNumber));
*/

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

/* 
const sum = (a, b) => a + b;
const difference = (a, b) => (b > a ? b - a : a - b);
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
console.log(`Сложение: ${sum(3, 2)}`);
console.log(`Разность: ${difference(1, 5)}`);
console.log(`Умножение: ${multiplication(6, 3)}`);
console.log(`Деление: ${division(8, -2)}`);
*/
