document.addEventListener("DOMContentLoaded", () => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#pw");
  const passwordCheck = document.querySelector("#pw-check");
  const submitBtn = document.querySelector("#submit-btn");

  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[@!?-_])(?=.*[0-9]).{8,}$/;

  // 입력 필드가 변경될 때마다 검증 수행
  username.addEventListener("input", validateForm);
  password.addEventListener("input", validateForm);
  passwordCheck.addEventListener("input", validateForm);

  function validateForm() {
    const isUsernameValid = username.value.trim() !== "";
    const isPasswordValid = passwordPattern.test(password.value);
    const isPasswordMatch = password.value === passwordCheck.value;

    // 모든 조건이 충족되면 제출 버튼 활성화
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
