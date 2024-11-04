const hamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.querySelector("#nav-content");
const closeNavButton = document.querySelector("#nav-content .close-btn");
const navLinks = document.querySelectorAll("#nav-content a");
const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  window.addEventListener("scroll", () => {
    if (pageYOffset > (window.innerHeight * 1.2)) {
      scrollButton.style.display = "flex";
      console.log(pageYOffset);
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener('click',()=>{
    window.scrollTo(0,0);
  })
}

hamburgerMenu.addEventListener("click", () => {
  navContent.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeNavButton.addEventListener("click", () => {
  navContent.classList.remove("show");
  document.body.style.overflow = "initial";
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContent.classList.remove("show");
    document.body.style.overflow = "initial";
  });
});
