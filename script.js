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

  <script>
/* ===============================
   AUTO NAMA TAMU + UNDERSCORE + WA
================================= */

const params = new URLSearchParams(window.location.search);
let namaTamu = "Bapak/Ibu/Saudara/i";

if (params.get("to")) {
  namaTamu = decodeURIComponent(params.get("to"))
    .replace(/[_+]/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

// tampilkan nama di undangan
guest.innerText = namaTamu;

// pesan personal di halaman
const pesanDefault =
  `Merupakan suatu kehormatan bagi kami apabila ${namaTamu} berkenan hadir dan memberikan doa restu.`;

personalMessage.innerText = params.get("pesan")
  ? decodeURIComponent(params.get("pesan")).replace(/[_+]/g, " ")
  : pesanDefault;

// ===============================
// LINK WHATSAPP UNDANGAN (ADMIN)
// ===============================
const noAdmin = "6283890194095"; // NOMOR WA KAMU
const pesanWA = 
`Assalamu’alaikum Warahmatullahi Wabarakatuh

Yth. ${namaTamu},

Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.

Silakan buka undangan berikut:
${window.location.href}

Merupakan suatu kehormatan bagi kami apabila ${namaTamu} berkenan hadir dan memberikan doa restu.

Wassalamu’alaikum Warahmatullahi Wabarakatuh`;

window.waUndangan = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesanWA)}`;
</script>

  }
});
