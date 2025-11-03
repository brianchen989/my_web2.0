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

// 勳章牆切換功能
let C_A_ImageIndex = 0;
const A_images = [
  { src: 'image/aws cloud practitioner.png', name: 'aws_practitioner' ,alt:"aws_practitioner"},
  { src: 'image/崇岳獎狀.png', name: '崇越ai競賽' ,alt:"崇越ai人工競賽"},
  { src: 'image/大一下書卷.png', name: '書卷獎' ,alt:"書卷獎"},
  { src: 'image/多益成績.png', name: '多益分數' ,alt:"多益分數"}
];
 
// 更新成就顯示並綁定點擊連結
function updateAchievementDisplay() {
  const achievementImage = document.getElementById('achievementImage');
  const achievementName = document.getElementById('achievementName');
  if (!achievementImage || !achievementName) return;

  achievementImage.src = A_images[C_A_ImageIndex].src;
  achievementImage.alt = A_images[C_A_ImageIndex].alt;
  achievementName.textContent = A_images[C_A_ImageIndex].name;

  // 點圖片跳轉（在新分頁開啟）
  achievementImage.style.cursor = 'pointer';
  achievementImage.onclick = () => {
    const url = A_images[C_A_ImageIndex].url;
    if (url) window.open(url, '_blank');
  };
}
  // 切到下一張
function right_btn_click_0() {
   C_A_ImageIndex = ( C_A_ImageIndex + 1) % A_images.length;
  updateAchievementDisplay();
}



function detail_btn_click_0() {
    window.location.href = "https://www.youtube.com/watch?v=FxfEzHiIgQU";
}

// 作品輯切換功能
let currentImageIndex = 0;
const images = [
  { src: 'image/螢幕擷取畫面 2025-09-16 153607.png', name: 'pygame' ,alt:"pygame",url: 'https://github.com/brianchen989/pygame_relive'},
  { src: 'image/太空旅行.png', name: '太空旅行' ,alt:"太空旅行",url: 'https://github.com/brianchen989/-'},
  { src: 'image/PYTHON.png', name: '練PYTHON' ,alt:"練PYTHON",url: 'https://github.com/brianchen989/python_in_senior'}
];
 
// 更新顯示並綁定點擊連結
function updateProductDisplay() {
  const productImage = document.getElementById('productImage');
  const productName = document.getElementById('productName');
  if (!productImage || !productName) return;

  productImage.src = images[currentImageIndex].src;
  productImage.alt = images[currentImageIndex].alt;
  productName.textContent = images[currentImageIndex].name;

  // 點圖片跳轉（在新分頁開啟）
  productImage.style.cursor = 'pointer';
  productImage.onclick = () => {
    const url = images[currentImageIndex].url;
    if (url) window.open(url, '_blank');
  };
}
  // 切到下一張
function right_btn_click() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateProductDisplay();
}

// 初始化（載入時設定第一張）
document.addEventListener("DOMContentLoaded", function() {
  // ...existing DOMContentLoaded code...
  updateProductDisplay();
  updateAchievementDisplay();
});

function detail_btn_click() {
    window.location.href = "https://www.youtube.com/watch?v=FxfEzHiIgQU";
}
document.addEventListener('DOMContentLoaded', function () {
  // ...existing DOMContentLoaded code...

  const menuBtn = document.querySelector('.menu');
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.addEventListener('click', function () {
      document.body.classList.toggle('enlarged-images');
      const expanded = document.body.classList.contains('enlarged-images');
      this.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // ...existing DOMContentLoaded code...
});
