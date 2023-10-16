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
onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
}
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a sessão passou da linha
  //dados necessários
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  //verificar se a base esta abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  console.log(sectionBoundaries);
  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
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
