window.addEventListener("scroll", function () {
  const nav = document.querySelector(".HeaderNav");

  if (window.scrollY > 520) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});