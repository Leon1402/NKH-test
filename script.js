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


const swiper3 = new Swiper('.hero__present-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: "fade",
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
        document.querySelector('.main').classList.add('main_active')
    } else {
        header.classList.remove('menu-fixed')
        document.querySelector('.main').classList.remove('main_active')
    }
})

const modal = document.querySelector('.burger-modal')
const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger-close')

burger.addEventListener('click', () => {
    modal.classList.add('burger-modal_active')
    modal.style.visibility = 'visible'
})

const burgerClosed = () => {
    modal.classList.remove('burger-modal_active')
    setTimeout(() => {
        modal.style.visibility = 'hidden'
    }, 300)
}

burgerClose.addEventListener('click', burgerClosed)

const searchButtons = document.querySelectorAll('.search-button');
const search = document.querySelector('.search');
const input = document.querySelector('.search__input')
const content = document.querySelector('.search__content')

const menuContent = document.querySelector('.menu__content')

let flag = true

for (const item of searchButtons) {
    item.addEventListener('click', (e) => {
        burgerClosed()
        search.classList.toggle('search_active');
        searchButtons.forEach((item) => {
            item.classList.toggle('search-button_active')
        })
        e._isSearchClicked = true
        if (flag)
            input.focus()
        flag = !flag
    })
}

input.addEventListener('focus', () => {
    content.classList.add('search__content_active');
    content.style.visibility = 'visible';
});

input.addEventListener('blur', () => {
    content.classList.remove('search__content_active');
    setTimeout(() => {
        content.style.visibility = 'hidden'
    } ,300)
});

search.addEventListener('click', (e) => {
    e._isSearchClicked = true;
})

window.addEventListener('click', (e) => {
    if (!e._isSearchClicked) {
        search.classList.remove('search_active')
        searchButtons.forEach((item) => {
            item.classList.remove('search-button_active')
        })
        flag = true
    }
})

