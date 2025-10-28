// Wait 2.5 seconds, then hide loading screen and show content
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loadingScreen.style.transition = "opacity 1s ease";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.classList.remove("hidden");
      content.style.animation = "fadeIn 1s ease forwards";
    }, 1000);
  }, 2500);
});

// Fade-in animation for the main content
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);