const container = document.querySelector(".product-box1");
const templateProductDiv = container.querySelector(".product-div");
container.innerHTML = ""; // 清空原本的範本 不然的話會多出一個標籤欄位
 
fetch("json//memberPay.json", {
  method: "GET",
})
  .then(async (res) => {
    const response = await res.json();
    console.log(response, 66);
 
    // 動態產生商品 依據json去產生，所以只要去json裡面手動添加刪除資料即可
    response.forEach((item) => {
      // 複製模板的範本，這樣才能得到裡面的子節點 ，不然的話只會得到一個空的div，然後只顯示最後一筆資料
      const productDiv = templateProductDiv.cloneNode(true);
      productDiv.querySelector(".product-title").textContent = item.name;
      productDiv.querySelector(".img").src = item.image;
      productDiv.querySelector(
        ".product-price"
      ).textContent = `NT$ ${item.price}`;
      
 
      // 這邊是把產生的商品加入到container裡面
      container.appendChild(productDiv);
    });
  })
  .catch((err) => {
    console.log(err);
  });