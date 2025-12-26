document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");
  const content = document.getElementById("content");
  const btnOpen = document.getElementById("btnOpen");

  if (btnOpen && hero && content) {
    btnOpen.addEventListener("click", function () {
      hero.style.display = "none";
      content.style.display = "block";
      window.scrollTo(0, 0);
    });
  }

  // Nama tamu dari URL (?to=Nama)
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");
  if (guest) {
    const guestEl = document.getElementById("guest");
    if (guestEl) {
      guestEl.innerText = guest.replace(/\+/g, " ");
    }
  }
});
