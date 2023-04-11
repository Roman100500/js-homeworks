// 1. Необходимо вывести сообщение в консоль "все теги прогрузились",
// когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась",
// когда все ресурсы страницы будут загружены.

window.onload = () => console.log("страница загрузилась");

// 3. При клике на какой-либо тег на странице в консоль должно выводиться
// сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс
//   "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке,
// по которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", (e) => {
  const classEl3 = e.target.classList.contains("super_element")
    ? "присутствует"
    : "отсутствует";
  console.log(
    `Класс "super_element" ${classEl3} в элементе "${e.target.tagName.toLowerCase()}".`
  );
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось
// сообщение: "Вы навели на textarea."

document.addEventListener("mouseover", (e) => {
  if (e.target.tagName.toLowerCase() === "textarea") {
    console.log("Вы навели на textarea.");
  }
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события
// в консоль необходимо выводить текст, который записан внутри элемента кнопки,
// по которой был произведен клик. Если клик был не по кнопке, то ничего
// выводить не нужно. Необходимо использовать делегирование.

const list5 = document.querySelector("ul");
list5.addEventListener("click", (e) => {
  const tagEl5 = e.target.tagName.toLowerCase();
  if (tagEl5 === "button") {
    console.log(e.target.textContent);
  }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания
// и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.

/* 
Думаю здесь связано с фазами события. Вывод в консоль текста проходит через фазу
всплытия, а принцип всплытия таков:

// https://learn.javascript.ru/bubbling-and-capturing

Когда на элементе происходит событие, обработчики сначала срабатывают на нём,
потом на его родителе, затем выше и так далее, вверх по цепочке предков.

Поскольку у нас целью события является 5-ое задание, то и выводится сначала 
текст из 5-ого задания, а потом из 3-его задания.
*/

// 7. С помощью JS необходимо изменить цвет заднего фона каждого
// второго тега li.

const liEls7 = document.querySelectorAll("li:nth-child(2n)");
liEls7.forEach((elem) => (elem.style.backgroundColor = "green"));
