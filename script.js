// Smooth page loading + animated reveal
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("mainContent");

  // Show loading screen for 2.5s
  setTimeout(() => {
    loading.style.transition = "opacity 1s ease";
    loading.style.opacity = "0";

    setTimeout(() => {
      loading.remove();
      main.classList.remove("hidden");

      // Fade-in content sections one by one
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((el, i) => {
        el.style.animation = `fadeUp 0.8s ease forwards`;
        el.style.animationDelay = `${i * 180}ms`;
      });

      // Animate team cards (nice glowing rise-up)
      const teamCards = document.querySelectorAll(".team-member");
      teamCards.forEach((card, index) => {
        card.style.animation = `playerFadeIn 0.9s ${index * 0.25}s ease forwards`;
      });

      // Add glow effect to the “Our Team” title
      const teamTitle = document.querySelector("h2");
      if (teamTitle && teamTitle.textContent.includes("Our Team")) {
        teamTitle.style.textShadow = "0 0 25px #00aaff, 0 0 45px #00aaff";
        teamTitle.style.transition = "text-shadow 1.2s ease-in-out";
        setTimeout(() => {
          teamTitle.style.textShadow = "0 0 12px #00aaff";
        }, 2800);
      }

    }, 1000);
  }, 2500);
});

// Add dynamic animation keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes playerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
    box-shadow: 0 0 0 rgba(0,170,255,0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0 0 25px rgba(0,170,255,0.5);
  }
}`;
document.head.appendChild(style);
