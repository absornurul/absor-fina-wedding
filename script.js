// Fungsi buka undangan
function openInvite() {
  const hero = document.querySelector('.hero');
  const content = document.getElementById('content');

  if (hero && content) {
    hero.style.display = 'none';
    content.style.display = 'block';
  }
}

// Ambil nama tamu dari URL (?to=Nama)
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('to');

  const guestEl = document.getElementById('guest');
  if (guestName && guestEl) {
    guestEl.innerText = guestName.replace(/\+/g, ' ');
  }
});
