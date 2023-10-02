ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`);
window.addEventListener("scroll", onScroll);
onscroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector("#navigation").classList.add("scroll");
  } else {
    document.querySelector("#navigation").classList.remove("scroll");
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    document.querySelector("#backToTopButton").classList.add("show");
  } else {
    document.querySelector("#backToTopButton").classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expended");
}
function closeMenu() {
  document.body.classList.remove("menu-expended");
}
console.log("Ola");
