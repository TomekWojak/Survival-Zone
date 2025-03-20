
const burgerBtn = document.querySelector('.nav__burger-btn')
const arrowDown = document.querySelector('.arrow-down')
const navMobileSpan = document.querySelector('.nav__item-span')
const dropdownMobileListItems = document.querySelectorAll('.nav__dropdown-mobile-li')
const navMobile = document.querySelector('.nav__links-mobile')
const nav = document.querySelector('.nav')
const allNavMobileLinks = document.querySelectorAll('.nav__item')


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

    allNavMobileLinks.forEach(link => link.addEventListener('click', () => {
        navMobile.classList.remove('active')
        burgerBtn.setAttribute('aria-expanded', 'false')
        burgerBtn.classList.add('closeAnimation')
        burgerBtn.classList.remove('openAnimation')
    }))

    dropdownMobileListItems.forEach(item => item.addEventListener('click', () => {
        navMobile.classList.remove('active')
        burgerBtn.setAttribute('aria-expanded', 'false')
        burgerBtn.classList.add('closeAnimation')
        burgerBtn.classList.remove('openAnimation')
    }))

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

const handleNavBg = () => {
    const scrollChange = window.scrollY

    if(scrollChange >= 150){
        nav.classList.add('nav-bg')
    }else {
        nav.classList.remove('nav-bg')
    }
}

window.addEventListener('scroll', handleNavBg)