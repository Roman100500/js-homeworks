"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем
// должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.

const changeSpan1 = () => {
  const input1 = document.querySelector("input#from");
  const span1 = document.querySelector("span");
  span1.innerText = input1.value;
};

const input1 = document.querySelector("input#from");
input1.addEventListener("input", changeSpan1);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с
// классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const button2 = document.querySelector(".messageBtn");
button2.addEventListener("click", () => {
  const div2 = document.querySelector(".message");
  div2.classList.add("animate_animated", "animate_fadeInLeftBig");
  div2.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля
// в этой форме.Если какое-либо поле не заполнено, форма не должна отправляться,
// также должны быть подсвечены незаполненные поля (необходимо поставить класс
// error незаполненным полям). Как только пользователь начинает заполнять
// какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс
// error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо
// убрать.

const formEl3 = document.querySelector("form");
const inputEls3 = formEl3.querySelectorAll("input, select");
formEl3.addEventListener("submit", (e) => {
  inputEls3.forEach((elem) => {
    if (!elem.value) {
      elem.classList.add("error");
      e.preventDefault();
    }
  });
});

formEl3.addEventListener("input", (e) => {
  if (e.target.classList.contains("form-control")) {
    !e.target.value
      ? e.target.classList.add("error")
      : e.target.classList.remove("error");
  }
});
