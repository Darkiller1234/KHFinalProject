let swiperInstance;

function initializeSwiper() {
  if (!swiperInstance) { // 스와이퍼가 없을 때만 생성
    swiperInstance = new Swiper('.btn-group', {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

function destroySwiper() {
  if (swiperInstance) { // 스와이퍼가 존재할 때만 삭제
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

function handleResize() {
  if (window.innerWidth <= 600) { // 화면이 600px 이하로 줄어들면
    initializeSwiper();
  } else {
    destroySwiper();
  }
}

// 페이지 로드시와 리사이즈될 때 실행
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);