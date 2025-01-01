const prices = {
  A: 500,
  B: 300,
};

function removeProduct(product) {
  const productCard = document.querySelector(`#product${product}`);
  if (productCard) {
    productCard.remove();
  }

  updateTotalSummary();
}

function updateQuantity(product, change) {
  const quantityInput = document.getElementById(`quantity${product}`);
  let quantity = parseInt(quantityInput.value) + change;

  // 確保數量不小於 0
  quantity = Math.max(0, quantity);
  quantityInput.value = quantity;

  // 更新該商品總價
  const totalSpan = document.getElementById(`total${product}`);
  totalSpan.textContent = (quantity * prices[product]).toString();

  updateTotalSummary();
}

function updateTotalSummary() {
  const quantityA = document.getElementById("quantityA") ? parseInt(document.getElementById("quantityA").value) : 0;
  const quantityB = document.getElementById("quantityB") ? parseInt(document.getElementById("quantityB").value) : 0;

  // 更新商品總數
  const totalItems = quantityA + quantityB;
  document.getElementById("totalItems").textContent = totalItems;

  // 更新總金額
  const totalAmount = quantityA * prices["A"] + quantityB * prices["B"];
  document.getElementById("totalAmount").textContent = totalAmount;
}

function checkoutCart() {
  // 獲取所有商品的總數
  const totalItems = parseInt(document.getElementById("totalItems").textContent);

  // 如果總數為 0，顯示提示訊息
  if (totalItems <= 0) {
    alert("您未購入任何東西！");
    return;
  }

  // 檢查運送資訊是否填寫
  const shippingAddress = document.querySelector(".shipping-address").value.trim();
  if (!shippingAddress) {
    alert("您沒有填寫運送資訊喔，請重新確認訂單是否正確~");
    return;
  }

  // 如果有商品且運送資訊已填寫，可以繼續結帳流程
  alert("購物成功！期待您下一次的購物！"); // 這行可以替換成實際的結帳邏輯
}
