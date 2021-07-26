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

const modal = document.querySelector('.burger-modal')
const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger-close')

burger.addEventListener('click', () => {
    modal.classList.add('burger-modal_active')
    modal.style.visibility = 'visible'
})

burgerClose.addEventListener('click', () => {
    modal.classList.remove('burger-modal_active')
    setTimeout(() => {
        modal.style.visibility = 'hidden'
    }, 300)
})