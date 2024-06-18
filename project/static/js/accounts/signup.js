document.addEventListener("DOMContentLoaded", () => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#pw");
  const passwordCheck = document.querySelector("#pw-check");
  const submitBtn = document.querySelector("#submit-btn");
  const invalidText = document.querySelector(".check-text");

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@!?-_])(?=.*[0-9]).{8,}$/;

  username.addEventListener("input", validateForm);
  password.addEventListener("input", validateForm);
  passwordCheck.addEventListener("input", validateForm);

  function validateForm() {
    const isUsernameValid = username.value.trim() !== "";
    const isPasswordValid = passwordPattern.test(password.value);
    const isPasswordMatch = password.value === passwordCheck.value;
    if (!isPasswordMatch) {
      invalidText.classList.remove("hidden-text");
    } else {
      invalidText.classList.add("hidden-text");
    }
    if (isUsernameValid && isPasswordValid && isPasswordMatch) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("disabled-status");
      submitBtn.classList.add("abled-status");
      return true;
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("abled-status");
      submitBtn.classList.add("disabled-status");
      return false;
    }
  }
});
