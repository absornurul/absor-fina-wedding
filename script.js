function openInvite() {
  const hero = document.getElementById("hero");
  const content = document.getElementById("content");

  if (hero && content) {
    hero.style.display = "none";
    content.style.display = "block";
    window.scrollTo(0, 0);
  }
}

// Ambil nama tamu dari URL (?to=Nama)
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");

  if (guest) {
    const guestEl = document.getElementById("guest");
    if (guestEl) {
      guestEl.innerText = guest.replace(/\+/g, " ");
    }
  }
});
