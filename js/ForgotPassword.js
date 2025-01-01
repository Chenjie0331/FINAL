const form = document.getElementById("forgotForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

// 電子信箱格式驗證
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 表單提交處理
form.addEventListener("submit", function (Myform) {
  Myform.preventDefault();

  const email = emailInput.value.trim();

  // 重置錯誤訊息
  emailError.style.display = "none";

  // 驗證電子信箱
  if (!isValidEmail(email)) {
    emailError.style.display = "block";
    return;
  }

  // 禁用提交按鈕
  submitBtn.disabled = true;
  submitBtn.textContent = "處理中...";

  // 模擬發送重置連結
  setTimeout(() => {
    // 隱藏表單
    form.style.display = "none";
    // 顯示成功訊息
    successMessage.style.display = "block";

    // 5秒後重導向到登入頁面
    setTimeout(() => {
      window.location.href = "Login.html";
    }, 5000);
  }, 1500);
});

// 即時驗證
emailInput.addEventListener("input", function () {
  if (this.value.trim() !== "" && !isValidEmail(this.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});
