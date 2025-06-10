// AOS initialize
AOS.init();

// Preloader hide on load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// FAQ toggle
 
const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");
    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "➕" : "➖";
  });
});

