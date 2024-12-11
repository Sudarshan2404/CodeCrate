const hamburger = document.querySelector(".ham-burger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.querySelectorAll(".pay-now").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Sorry! We are not accepting projects right now");
  });
});

document.querySelector(".project").addEventListener("click", () => {
  alert("you will be able to see our projects soon ");
});
