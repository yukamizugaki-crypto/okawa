/* ==========================================================================
   割烹 大川 - JavaScript (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- ハンバーガーメニュー制御 ---
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      // クラスのトグル
      const isActive = hamburger.classList.toggle('is-active');
      navOverlay.classList.toggle('is-open');

      // メニュー展開時はスクロールをロック
      if (isActive) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // オーバーレイ内のリンクをクリックしたらメニューを閉じる
    const overlayLinks = document.querySelectorAll('.nav-overlay-link');
    overlayLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navOverlay.classList.remove('is-open');
        body.style.overflow = '';
      });
    });

    // オーバーレイ内の閉じるボタンをクリックしたらメニューを閉じる
    const overlayClose = document.querySelector('.nav-overlay-close');
    if (overlayClose) {
      overlayClose.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navOverlay.classList.remove('is-open');
        body.style.overflow = '';
      });
    }
  }

  // --- 店内写真ギャラリーモーダル制御 ---
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const modalClose = document.querySelector('.modal-close');

  if (galleryItems.length > 0 && modal && modalImg) {
    galleryItems.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        body.style.overflow = 'hidden'; // モーダル展開時もスクロールをロック
      });
    });

    // モーダルを閉じる処理 (閉じるボタン)
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = '';
      });
    }

    // モーダル背景クリックでも閉じるようにする
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        body.style.overflow = '';
      }
    });
  }
});
