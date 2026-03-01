window.addEventListener("scroll", function () {
  const nav = document.querySelector(".HeaderNav");

  if (window.scrollY > 90) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});