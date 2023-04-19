import { personData } from "./data.js";
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const persons = JSON.parse(personData);
console.log(persons);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка заголовок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const content = document.createElement("div");
content.classList.add("content");
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.gap = "64px";
content.style.textAlign = "center";

persons.forEach(({ name, age, profession, url }) => {
  const div = document.createElement("div");
  div.classList.add("card-body");

  const divContent = document.createElement("div");
  divContent.classList.add("card-content");

  const img = document.createElement("img");
  img.classList.add("card-img");
  img.alt = "photo";
  img.src = url;
  img.width = 300;

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = name;

  const parAge = document.createElement("p");
  parAge.classList.add("card-content");
  parAge.textContent = `Age: ${age}`;

  const parProfession = document.createElement("p");
  parProfession.classList.add("card-content");
  parProfession.textContent = `Profession: ${profession}`;

  div.appendChild(title);
  div.appendChild(parAge);
  div.appendChild(parProfession);

  divContent.appendChild(img);
  divContent.appendChild(div);
  content.appendChild(divContent);

  document.querySelector("body").appendChild(content);
});
