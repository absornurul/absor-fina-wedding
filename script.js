function openInvite() {
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

const params = new URLSearchParams(window.location.search);
const guest = params.get('to');
document.getElementById('guest').innerText = guest ? guest : 'Tamu Undangan';
