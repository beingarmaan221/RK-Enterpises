// document.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.querySelector(".menu-btn");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("active");
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  // open/close with hamburger
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // close with X button
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
