// Fetch JSON 資料並動態生成內容
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-box");
  const templateProductDiv = container.querySelector(".product-div");
  
  // 確保模板不被直接顯示
  templateProductDiv.style.display = "none";

  // 清空現有內容（除了模板）
  container.innerHTML = "";

  // 從 JSON 檔案抓取資料
  fetch("json/member.json", {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      response.forEach((item) => {
        // 複製模板
        const productDiv = templateProductDiv.cloneNode(true);
        productDiv.style.display = "flex"; // 顯示複製的模板

        // 填充資料
        productDiv.querySelector(".name").textContent = `姓名: ${item.name}`;
        productDiv.querySelector(".image").src = item.image || "default.png"; // 提供預設圖片
        productDiv.querySelector(".phone").textContent = `電話: ${item.phone}`;
        productDiv.querySelector(".address").textContent = `地址: ${item.address}`;
        productDiv.querySelector(".mail").textContent = `信箱: ${item.mail}`;
        productDiv.querySelector(".password").textContent = `密碼: ${item.password}`;

        // 添加到 container
        container.appendChild(productDiv);
      });
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
});


//更改會員資料
const form = document.getElementById('update-form');


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  
  setTimeout(() => {
    
    alert('更改成功！');
    
    
    window.location.href = 'memberCenter.html';
  }, 500);
});
