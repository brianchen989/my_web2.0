document.addEventListener("DOMContentLoaded", function() {
  const nowLink = document.querySelector('a.nav-link[href="#now"]');
  if (nowLink) {
    nowLink.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('now');
      const offset = -130; // Adjust this value for more/less space below
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
});


let currentImageIndex = 0;
const images = [
  { src: 'image/下樓梯.png', name: '下樓梯' ,alt:"下樓梯"},
  { src: 'image/太空旅行.png', name: '太空旅行' ,alt:"下樓梯"},
  { src: 'image/PYTHON.png', name: '練PYTHON' ,alt:"下樓梯"}
];
const quotes = [
    { text: "在這個世界上，有兩種力量，一是劍，二是筆。<br>最後，劍會被筆所征服。", author: "佐藤長治" },
    { text: "成功不是終點，失敗也不是終結，最重要的是勇於前行。", author: "丘吉爾" },
    { text: "相信自己，你就能創造奇蹟。", author: "匿名" },
    { text: "行動是治療恐懼的良藥。", author: "匿名" },
    { text: "不怕慢，只怕站。", author: "中國諺語" }
  ];

  // 隨機選一則語錄
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteBlock").innerHTML =
    `<p>${random.text}</p><p>— ${random.author}</p>`;
function right_btn_click() {
  // 切換到下一張圖片
  currentImageIndex = (currentImageIndex + 1) % images.length;
   // 更新圖片和名稱
  const productImage = document.getElementById('productImage');
  const productName = document.getElementById('productName');
  productImage.src = images[currentImageIndex].src;
  productName.textContent = images[currentImageIndex].name;
}
function detail_btn_click() {
    window.location.href = "https://www.youtube.com/watch?v=FxfEzHiIgQU";
}
