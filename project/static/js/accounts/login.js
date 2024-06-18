/* login page - JS */

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".disable-btn");
const signBtn = document.querySelector(".sign-btn");

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/accounts/signup/";
});

const checkValid = () => {
  if (username.value && password.value) {
    loginBtn.classList.add("active-btn");
    loginBtn.classList.remove("disable-btn");
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.add("disable-btn");
    loginBtn.classList.remove("active-btn");
  }
};

username.addEventListener("input", checkValid);
password.addEventListener("input", checkValid);
