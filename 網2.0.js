

let currentImageIndex = 0;
const images = [
  { src: 'image/下樓梯.png', name: '下樓梯' ,alt:"下樓梯"},
  { src: 'image/太空旅行.png', name: '太空旅行' ,alt:"下樓梯"},
  { src: 'image/PYTHON.png', name: '練PYTHON' ,alt:"下樓梯"}
];

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
