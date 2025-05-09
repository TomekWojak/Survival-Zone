const burgerBtn = document.querySelector(".nav__burger-btn");
const arrowDown = document.querySelector(".arrow-down");
const navMobileSpan = document.querySelector(".nav__item-span");

const dropdownMobileListItems = document.querySelectorAll(
	".nav__dropdown-mobile-li"
);
const navMobile = document.querySelector(".nav__links-mobile");
const nav = document.querySelector(".nav");
const allNavMobileLinks = document.querySelectorAll(".nav__item");
const logo = document.querySelector(".nav__logo-img");
const footerYear = document.querySelector(".footer__year");
const backToTopArrow = document.querySelector(".scroll-up-arrow");

// popup
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup__img");
const popupArrowLeft = document.querySelector(".popup__arrow-left");
const popupArrowRight = document.querySelector(".popup__arrow-right");
const popupCloseBtn = document.querySelector(".popup__close");
const galleryImages = document.querySelectorAll(".gallery-img");
const overlay = document.querySelector(".overlay");
let currentIndex;
let clickedImg;
let currentImg;
// popup

const showPopup = () => {
	popup.classList.add("active");
	overlay.classList.add("active");
};

const closePopup = () => {
	popup.classList.remove("active");
	overlay.classList.remove("active");
};

galleryImages.forEach((img, index) => {
	img.addEventListener("click", () => {
		clickedImg = img.getAttribute("src");
		popupImg.setAttribute("src", clickedImg);
		currentIndex = index;
		showPopup();
	});
});

const showNextImg = () => {
	if (currentIndex === galleryImages.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
	currentImg = galleryImages[currentIndex].getAttribute("src");
	popupImg.setAttribute("src", currentImg);
};
const showPreviousImg = () => {
	if (currentIndex === 0) {
		currentIndex = galleryImages.length - 1;
	}else {
		currentIndex--
	}
	currentImg = galleryImages[currentIndex].getAttribute("src");
	popupImg.setAttribute("src", currentImg);
};

burgerBtn.addEventListener("click", () => {
	const isOpened = burgerBtn.getAttribute("aria-expanded");
	const isHidden = navMobile.getAttribute("aria-hidden");
	if (isOpened === "true" && isHidden === "false") {
		burgerBtn.setAttribute("aria-expanded", "false");
		burgerBtn.classList.add("closeAnimation");
		burgerBtn.classList.remove("openAnimation");
		navMobile.classList.remove("active");
		navMobile.setAttribute("aria-hidden", "true");
		logo.classList.remove("rotated");
		logo.classList.add("unrotated");
	} else {
		burgerBtn.setAttribute("aria-expanded", "true");
		burgerBtn.classList.remove("closeAnimation");
		burgerBtn.classList.add("openAnimation");
		navMobile.classList.add("active");
		navMobile.setAttribute("aria-hidden", "false");
		logo.classList.add("rotated");
		logo.classList.remove("unrotated");
	}

	allNavMobileLinks.forEach((link) =>
		link.addEventListener("click", () => {
			navMobile.classList.remove("active");
			burgerBtn.setAttribute("aria-expanded", "false");
			burgerBtn.classList.add("closeAnimation");
			burgerBtn.classList.remove("openAnimation");
		})
	);

	dropdownMobileListItems.forEach((item) =>
		item.addEventListener("click", () => {
			navMobile.classList.remove("active");
			burgerBtn.setAttribute("aria-expanded", "false");
			burgerBtn.classList.add("closeAnimation");
			burgerBtn.classList.remove("openAnimation");
		})
	);
});

navMobileSpan.addEventListener("click", () => {
	let delayTime = 0;
	arrowDown.classList.toggle("active");
	dropdownMobileListItems.forEach((item) => {
		item.classList.toggle("active");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
});

const handleYear = () => {
	const currentYear = new Date().getFullYear();
	footerYear.innerText = currentYear;
};

const handleScrollEvents = () => {
	const scrollChange = window.scrollY;

	if (scrollChange >= 150) {
		nav.classList.add("nav-bg");
		backToTopArrow.classList.add("active");
		backToTopArrow.setAttribute("aria-hidden", "false");
	} else {
		nav.classList.remove("nav-bg");
		backToTopArrow.classList.remove("active");
		backToTopArrow.setAttribute("aria-hidden", "true");
	}
};

navMobileSpan.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		navMobileSpan.click();
	}
});

overlay.addEventListener('click', closePopup)
popupArrowLeft.addEventListener("click", showPreviousImg);
popupArrowRight.addEventListener("click", showNextImg);
popupCloseBtn.addEventListener("click", closePopup);
handleYear();
window.addEventListener("scroll", handleScrollEvents);
