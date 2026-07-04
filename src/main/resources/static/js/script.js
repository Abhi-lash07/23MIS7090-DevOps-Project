// Highlight the active nav link
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === path) link.classList.add("active");
  });

  const healthEl = document.getElementById("health");
  if (healthEl) {
    healthEl.textContent = "Status: OK | Loaded " + new Date().toLocaleString();
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      form.reset();
    });
  }
});
