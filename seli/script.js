// --- Modal Alert --- //
const modalAlert = document.getElementById('modal-alert');
const tombolTutup = document.getElementById('tombol-tutup');

function tampilkanModalAlert() {
  modalAlert.classList.remove("hidden");
}

function tutupModalAlert() {
  modalAlert.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function () {
  tampilkanModalAlert();
});

tombolTutup.addEventListener("click", tutupModalAlert);

// --- Modal Gambar --- //
const images = document.querySelectorAll('.menu-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtns = document.querySelectorAll('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
    closeVideo();
  });
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// --- Modal Video Popup --- //
function openVideo(link) {
  const videoModal = document.getElementById("videoPopupModal");
  const videoFrame = document.getElementById("popupVideoFrame");
  videoFrame.src = link;
  videoModal.style.display = "flex";
}

function closeVideo() {
  const videoModal = document.getElementById("videoPopupModal");
  const videoFrame = document.getElementById("popupVideoFrame");
  videoModal.style.display = "none";
  videoFrame.src = "";
}

window.addEventListener('click', e => {
  const videoModal = document.getElementById("videoPopupModal");
  if (e.target === videoModal) {
    closeVideo();
  }
});

// --- Navbar & Theme Toggle --- //
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");

  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
