// 點登入會彈出介面框
function openLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.classList.add("show");
}

// 關閉登入彈出框
function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  modal.classList.remove("show");
}

// 提交表單
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("Login attempt with:", { email, password });
  alert("已嘗試登入！");
});

// 點擊模態框外部關閉
window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};
