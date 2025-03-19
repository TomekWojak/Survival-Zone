
const burgerBtn = document.querySelector('.nav__burger-btn')
const arrowDown = document.querySelector('.arrow-down')
const navMobileSpan = document.querySelector('.nav__item-span')
const dropdownMobileListItems = document.querySelectorAll('.nav__dropdown-mobile-li')
const navMobile = document.querySelector('.nav__links-mobile')


burgerBtn.addEventListener('click', () => {

    const isOpened = burgerBtn.getAttribute('aria-expanded')

    if(isOpened === 'true') {
        burgerBtn.setAttribute('aria-expanded', 'false')
        burgerBtn.classList.add('closeAnimation')
        burgerBtn.classList.remove('openAnimation')
        navMobile.classList.remove('active')
    }else {
        burgerBtn.setAttribute('aria-expanded', 'true')
        burgerBtn.classList.remove('closeAnimation')
        burgerBtn.classList.add('openAnimation')
        navMobile.classList.add('active')
    }
})


navMobileSpan.addEventListener('click', () => {
    let delayTime = 0;
    arrowDown.classList.toggle('active')
    dropdownMobileListItems.forEach(item => {
        item.classList.toggle('active')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
})