document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById("confirm-password-error");

  // 密碼輸入時的驗證
  password.addEventListener("input", function () {
    validatePassword();
    // 如果確認密碼已經有輸入，也要檢查密碼匹配
    if (confirmPassword.value) {
      validateConfirmPassword();
    }
  });

  // 確認密碼輸入時的驗證
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // 表單提交時的驗證
  form.addEventListener("submit", function (event) {
    // 阻止表單預設提交行為
    event.preventDefault();

    // 進行所有驗證
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // 如果所有驗證都通過
    if (isPasswordValid && isConfirmPasswordValid) {
      form.submit(); // 提交表單
    }
  });

  // 驗證密碼
  function validatePassword() {
    const isValid = password.value.length >= 8;
    if (!isValid) {
      password.classList.add("error");
      passwordError.style.display = "block";
      return false;
    } else {
      password.classList.remove("error");
      passwordError.style.display = "none";
      return true;
    }
  }

  // 驗證確認密碼
  function validateConfirmPassword() {
    const isValid = password.value === confirmPassword.value;
    if (!isValid) {
      confirmPassword.classList.add("error");
      confirmPasswordError.style.display = "block";
      return false;
    } else {
      confirmPassword.classList.remove("error");
      confirmPasswordError.style.display = "none";
      return true;
    }
  }

  // 為了更好的用戶體驗，添加其他字段的驗證
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  username.addEventListener("input", function () {
    const isValid = username.value.length >= 2 && username.value.length <= 20;
    document.getElementById("username-error").style.display = isValid ? "none" : "block";
    username.classList.toggle("error", !isValid);
  });

  email.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email.value);
    document.getElementById("email-error").style.display = isValid ? "none" : "block";
    email.classList.toggle("error", !isValid);
  });

  phone.addEventListener("input", function () {
    const phoneRegex = /^09\d{8}$/;
    const isValid = phone.value === "" || phoneRegex.test(phone.value); // 允許為空
    document.getElementById("phone-error").style.display = isValid ? "none" : "block";
    phone.classList.toggle("error", !isValid);
  });
});
