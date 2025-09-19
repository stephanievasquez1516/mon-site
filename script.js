document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.fontWeight = "bold";
    });
    link.addEventListener("mouseout", () => {
      link.style.fontWeight = "normal";
    });
  });
});