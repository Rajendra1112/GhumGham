/*=============== SHOW / HIDE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*==== MENU SHOW ====*/
/* validate if constant exits */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

/*==== MENU HIDDEN ====*/
/* validate if constant exits */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

// when we click on each nav__link we will remove show__menu class
for (let navLink of navLinks) {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
  /* selecting header element to apply effect */
  const header = document.getElementById("header");

  /* when the scroll is greater than 50 viewport height, add blur-header class otherwise remove
  blur-header class */
  this.scrollY > 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

/* adding scroll event to window object and calling blurHeader function for bluring header */
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is greater than 350 viewport height then add show__scroll__up class to
  // element having id="scroll-up"
  this.scrollY >= 350
    ? scrollUp.classList.add("show__scroll__up")
    : scrollUp.classList.remove("show__scroll__up");
};

window.addEventListener("scroll", showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true  //Animation Repeat
});

sr.reveal(".home__data,.explore__data,.explore__user,.footer__container");
sr.reveal(".home__card", { delay: 600, distance: "100px", interval: 100 });
sr.reveal(".about__data,.join__image", { origin: "right" });
sr.reveal(".about__image,.join__data", { origin: "left" });
sr.reveal(".popular__card", { interval: 200 });
