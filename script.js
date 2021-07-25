const swiper = new Swiper('.hero__main-swiper', {
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

const swiper2 = new Swiper('.hero__swiper', {
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const header = document.querySelector('.menu')

window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 300) {
        header.classList.add('menu-fixed')
    } else {
        header.classList.remove('menu-fixed')
    }
})