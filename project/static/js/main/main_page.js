/* main page - JS */

const categoryItem = document.querySelectorAll(
  '.category-item input[type="checkbox"]'
);

const selectBox = document.querySelector(".category-selection-view");

const selectedItem = categoryItem.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;
    const isChecked = checkbox.checked;
    const itemClass = "selected-" + checkbox.id;

    if (isChecked) {
      console.log(`Checked: ${label.textContent}`);
      const item = document.createElement("div");
      item.textContent = label.textContent;
      item.classList.add(itemClass);
      selectBox.appendChild(item);
    } else {
      const itemToRemove = selectBox.querySelector("." + itemClass);
      if (itemToRemove) {
        selectBox.removeChild(itemToRemove);
      }
      selectBox.removeChild();
    }
  });
});
