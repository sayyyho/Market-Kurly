/* product detail page - JS */

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const count = document.querySelector(".total-count");
const price = Number(
  document.querySelector(".default-price").textContent.split(" ")[0]
);
const totalPrice = document.querySelector(".final-price");
let countNum = 1;

increment.addEventListener("click", () => {
  countNum += 1;
  count.textContent = countNum;
  totalPrice.textContent = `${countNum * price} 원`;
});

decrement.addEventListener("click", () => {
  if (countNum > 1) {
    countNum -= 1;
    count.textContent = countNum;
    totalPrice.textContent = `${countNum * price} 원`;
  }
});

const submitBtn = document.querySelector(".submit-btn");
const submitText = document.querySelector("#product-review");
submitText.addEventListener("input", (e) => {
  if (
    e.target.value === undefined ||
    e.target.value === null ||
    e.target.value === ""
  ) {
    submitBtn.classList.remove("able");
    submitBtn.disabled = true;
  } else {
    submitBtn.classList.add("able");
    submitBtn.disabled = false;
  }
});
