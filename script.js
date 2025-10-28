// Show loading screen briefly, then reveal main content with smooth fade
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("mainContent");

  // Wait 2.5 seconds to display loading animation
  setTimeout(() => {
    loading.style.transition = "opacity 1s ease";
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.remove();
      main.classList.remove("hidden");

      // Animate each fade-in element sequentially
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((el, i) => {
        el.style.animation = `fadeUp 0.8s ease forwards`;
        el.style.animationDelay = `${i * 150}ms`;
      });

      // Trigger team card animations once visible
      const teamCards = document.querySelectorAll(".team-member");
      teamCards.forEach((card) => {
        card.style.animationPlayState = "running";
      });

      // Add glow effect to "Our Team" title
      const teamTitle = document.querySelector("h2");
      if (teamTitle && teamTitle.textContent.includes("Our Team")) {
        teamTitle.style.textShadow = "0 0 20px #00aaff, 0 0 40px #00aaff";
        teamTitle.style.transition = "text-shadow 1s ease-in-out";
        setTimeout(() => {
          teamTitle.style.textShadow = "0 0 10px #00aaff";
        }, 2500);
      }

    }, 1000);
  }, 2500);
});

// Add keyframes for fadeUp animation dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
