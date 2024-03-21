const swiper = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40, 
    preventInteractionOnTransition: true, 
    breakpoints: {
        960: {
            slidesPerView: 3,
            preventInteractionOnTransition: false,  
          },
        640: {
            slidesPerView: 2, 
            preventInteractionOnTransition: false, 
        },
        414: {
            slidesPerView: 1,
            preventInteractionOnTransition: false, 
            spaceBetween: 20, 
        },
        240: {
            slidesPerView: 1,
            preventInteractionOnTransition: false, 
            spaceBetween: 10, 
        },
      },
});

const swiperPositions = new Swiper('.positions-swiper', {
    loop: true, 
    cssMode: true,    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const swiperCustReviews = new Swiper('.customer-reviews-swiper', {
    loop: true, 
    cssMode: true,    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});