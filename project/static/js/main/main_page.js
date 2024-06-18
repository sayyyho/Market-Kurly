/* main page - JS */

const categoryItem = document.querySelectorAll(
  '.category-item input[type="checkbox"]'
);

const selectedCategory = document.querySelectorAll(".category-selection-item");
const selectionView = document.querySelector(".category-selection-view");
const resetContainer = document.querySelector(".reset-view");
const sortingCount = document.querySelector(".sorting-count");
let countHidden = 0;
let countproduct = 0;

selectedCategory.forEach((category, index) => {
  if (category.classList.contains("hidden-class")) {
    countHidden += 1;
  }
  const closeButton = category.querySelector("img");
  closeButton.addEventListener("click", () => {
    const bindingID = index + 1;
    const mappingCheck = document.querySelector(`#check-${bindingID}`);
    const mappingCount = document.querySelector(`#count-${bindingID}`);
    mappingCheck.checked = false;
    countproduct -= Number(mappingCount.textContent);
    sortingCount.textContent = `총 ${countproduct}건`;
    category.classList.add("hidden-class");
    countHidden += 1;
    if (countHidden === 3) {
      selectionView.classList.add("hidden-class");
      sortingCount.textContent = "총 508건";
      countproduct = 0;
    }
  });
});

const selectedItem = categoryItem.forEach((checkbox, index) => {
  checkbox.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    const bindingID = index + 1;
    const mappingSelection = document.querySelector(`#selection-${bindingID}`);
    const mappingCount = document.querySelector(`#count-${bindingID}`);
    if (isChecked) {
      if (countHidden === 3) {
        selectionView.classList.remove("hidden-class");
      }
      countHidden -= 1;
      mappingSelection.classList.remove("hidden-class");
      countproduct += Number(mappingCount.textContent);
      sortingCount.textContent = `총 ${countproduct}건`;
    } else {
      mappingSelection.classList.add("hidden-class");
      countHidden += 1;
      countproduct -= Number(mappingCount.textContent);
      sortingCount.textContent = `총 ${countproduct}건`;
      if (countHidden === 3) {
        selectionView.classList.add("hidden-class");
        sortingCount.textContent = "총 508건";
        countproduct = 0;
      }
    }
  });
});

resetContainer.addEventListener("click", () => {
  categoryItem.forEach((item, index) => {
    item.checked = false;
    const bindingID = `#selection-${index + 1}`;
    const mappingSelection = document.querySelector(bindingID);
    mappingSelection.classList.add("hidden-class");
  });
  selectionView.classList.add("hidden-class");
  countHidden = 3;
  countproduct = 0;
  sortingCount.textContent = "총 508건";
});
