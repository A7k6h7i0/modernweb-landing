// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // Adjust for fixed navbar height
          behavior: "smooth"
        });
      }
    });
  });

  // Scroll progress indicator (optional but adds value)
  const progressBar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrollPercent + "%";
    }
  });
});
