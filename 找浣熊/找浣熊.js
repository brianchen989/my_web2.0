// 取得元素並做防呆

const counterEl = document.getElementById('counter');
if (!counterEl) {
  console.warn('找不到 id="counter" 的元素，腳本停止執行。');
  throw new Error('Missing #counter element');
}

const click_imgs = document.querySelectorAll('img.clickable');
if (!click_imgs || click_imgs.length === 0) {
  console.warn('找不到任何具有 class="clickable" 的 <img>。');
}

// 計時器 id（用來在再次點擊時重設）
let hideTimer = null;
// 顯示延遲 (ms)：這裡設成 3 秒
const HIDE_DELAY_MS = 3000;

// 更新計數並顯示；全部點完時顯示恭喜並在指定時間後隱藏
function updateCountAndShow() {
  const remaining = document.querySelectorAll('img.clickable:not([data-clicked="true"])').length;

  // 清除舊的計時器
  if (hideTimer !== null) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  if (remaining === 0) {
    // 所有圖片都被點完：顯示恭喜，並在指定時間後隱藏
    counterEl.textContent = '恭喜！你抓到所有浣熊！';
    counterEl.classList.add('congrats');
    counterEl.style.display = 'inline-block';

    hideTimer = setTimeout(() => {
      counterEl.style.display = 'none';
      counterEl.classList.remove('congrats');
      hideTimer = null;
    }, HIDE_DELAY_MS);

    return;
  }

  // 尚有剩餘：顯示剩餘數字，並在指定時間後隱藏（若在此期間再次點擊會重設）
  counterEl.classList.remove('congrats');
  counterEl.textContent = `還剩 ${remaining} 隻浣熊`;
  counterEl.style.display = 'block';

  hideTimer = setTimeout(() => {
    counterEl.style.display = 'none';
    hideTimer = null;
  }, HIDE_DELAY_MS);
}

// 綁定點擊事件至每張圖片
click_imgs.forEach(img => {
  img.addEventListener('click', function () {
    if (this.dataset.clicked === 'true') return;

    // 隱藏圖片但保留位置
    this.style.visibility = 'hidden';
    this.dataset.clicked = 'true';

    updateCountAndShow();
  });
});

// 初始化一次計數文字（不顯示，直到第一次點擊）
const initialRemaining = document.querySelectorAll('img.clickable:not([data-clicked="true"])').length;
counterEl.textContent = `還剩 ${initialRemaining} 隻浣熊`;

