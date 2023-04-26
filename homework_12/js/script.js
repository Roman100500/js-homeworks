import { dataProducts } from "./data.js";

const productData = JSON.parse(dataProducts);
const productBox = document.querySelector(".product__box");

productData.forEach(({ name, image, price, color, size, quantity }, i) => {
  const productEl = `
  <div class="product product${i + 1} delete-display">
    <button class="btn__del" type="button">Удалить</button>
    <div class="product__content">
      <img class="product__img" src="${image}" alt="${name}" />
      <div class="product__desc">
        <h2 class="product__name">${name}</h2>
        <p class="product__price_label margin-bottom">
          Price: <span class="product__price">$${price}</span>
        </p>
        <p class="product__color margin-bottom">Color: ${color}</p>
        <p class="product__size margin-bottom">Size: ${size}</p>
        <div class="product__qty">
          <label class="input__label margin-bottom">Quantity:</label>
          <input class="input__qty" type="number" min="1" max="10" value="${quantity}"/>
        </div>
      </div>
    </div>
  </div>`;
  productBox.insertAdjacentHTML("beforeend", productEl);
});

const deleteButtons = document.querySelectorAll(".btn__del");

deleteButtons.forEach((button, i) => {
  button.addEventListener("click", function () {
    const product = button.closest(`.product${i + 1}`);
    product.classList.add("delete-display");
    const products = document.querySelectorAll(".delete-display");
    if (products.length === productData.length) {
      productBox.classList.add("delete-display");
    }
  });
});

const btnAdds = document.querySelectorAll(".products-item-btn");

btnAdds.forEach((button, i) => {
  button.addEventListener("click", function () {
    const product = document.querySelector(`.product${i + 1}`);
    product.classList.remove("delete-display");
    productBox.classList.remove("delete-display");
  });
});
