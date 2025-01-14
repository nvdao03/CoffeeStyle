const navbar = document.getElementById("nav-list");
const toggleMenu = document.getElementById("nav-more");

document.addEventListener("click", (e) => {
  if (toggleMenu.contains(e.target)) {
    navbar.classList.toggle("lg-max:hidden");
  } else if (!navbar.contains(e.target)) {
    navbar.classList.add("lg-max:hidden");
  }
});
