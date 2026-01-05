const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const themeToggle = document.getElementById("themeToggle");

// Ambil elemen paragraf dalam popup (buat teks notifikasi)
const popupMessage = popup.querySelector("p");

let cart = [];

// ➕ Tambah ke keranjang
document.querySelectorAll(".btn-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseInt(button.dataset.price);

    // Tambahkan ke array cart
    cart.push({ name, price });

    // Tampilkan pesan popup
    popupMessage.textContent = `${name} ditambahkan ke keranjang!`;
    popup.style.display = "flex";
  });
});

// 🔒 Tutup popup
okBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// 🛒 Tampilkan isi keranjang
cartBtn.addEventListener("click", () => {
  cartItems.innerHTML = "";
  let total = 0;

  // Tambahkan setiap item ke list
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString("id-ID")}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  // Tampilkan total harga
  totalPrice.textContent = `Total: Rp ${total.toLocaleString("id-ID")}`;
  cartModal.style.display = "flex";
});

// ❌ Tutup modal keranjang
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// 🌙 Toggle Dark/Light Mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀" : "🌙";
});
