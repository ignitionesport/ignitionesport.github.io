// Smooth page reveal with fade and glow effects
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("mainContent");

  setTimeout(() => {
    loading.style.transition = "opacity 1s ease";
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.remove();
      main.classList.remove("hidden");

      // Animate fade-in sections
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((el, i) => {
        el.style.animation = `fadeUp 0.9s ease forwards`;
        el.style.animationDelay = `${i * 100}ms`;
      });

      // Animate team cards
      const teamCards = document.querySelectorAll(".team-member");
      teamCards.forEach((card) => {
        card.style.animationPlayState = "running";
      });
    }, 900);
  }, 1800);
});

// Add fadeUp animation dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
