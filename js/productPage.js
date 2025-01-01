document.addEventListener("DOMContentLoaded", function () {
  console.log("productPage.js 已加載！"); // 測試用

  // 獲取 URL 的 hash（例如 #CAPS）
  const hash = window.location.hash.substring(1); // 去掉 # 符號
  console.log("當前 hash:", hash); // 檢查 hash 是否正確

  // 獲取所有商品
  const productItems = document.querySelectorAll(".product-item");

  // 根據 hash 過濾商品
  productItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");

    if (hash === "ALL" || itemCategory === hash) {
      item.style.display = "block"; // 顯示符合條件的商品
    } else {
      item.style.display = "none"; // 隱藏不符合條件的商品
    }
  });

  // 分類選擇功能（導覽列中的分類按鈕和漢堡菜單中的分類按鈕）
  const categoryLinks = document.querySelectorAll(".category-nav a, .submenu a");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默認跳轉行為（因為是分類按鈕，不是商品連結）
      categoryLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const selectedCategory = this.getAttribute("data-category"); // 獲取點擊的分類

      // 遍歷所有商品，根據分類顯示或隱藏
      productItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (selectedCategory === "ALL" || itemCategory === selectedCategory) {
          item.style.display = "block"; // 顯示符合條件的商品
        } else {
          item.style.display = "none"; // 隱藏不符合條件的商品
        }
      });
    });
  });
});
