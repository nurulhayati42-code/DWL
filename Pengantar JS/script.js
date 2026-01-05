// --- BAGIAN 1: PEMAHAMAN DASAR & VARIABEL ---

// Deklarasi variabel menggunakan 'const' (untuk nilai yang tidak berubah)

const namaMatkul = "Desain Web Lanjutan";

const semester = 3;

// Deklarasi variabel menggunakan 'let' (untuk nilai yang mungkin berubah)

let namaDosen = "Nurul Hayati"; // Mahasiswa bisa mengganti ini nanti

let tahunSaatIni = new Date().getFullYear();

// --- BAGIAN 2: FUNGSI OUTPUT ---

// FUNGSI OUTPUT 1: alert()

// Digunakan untuk menampilkan kotak dialog sederhana yang memblokir browser.

alert(`Halo Mahasiswa! Selamat datang di ${namaMatkul}.`);

// FUNGSI OUTPUT 3: console.log()

// Digunakan untuk debugging dan menampilkan pesan di Console Developer Tools.

// Ini adalah cara output yang paling umum digunakan oleh developer.

console.log("--- Laporan Eksekusi JavaScript ---");

console.log("Status: Skrip eksternal berhasil dimuat!");

console.log(`Mata Kuliah: ${namaMatkul}`);

console.log(`Diampu oleh: ${namaDosen}`);

// Contoh sederhana operasi

console.log(`Tahun sekarang adalah: ${tahunSaatIni}`);

console.log(`Mahasiswa di semester: ${semester}`);

console.log(`Tipe data variabel 'namaMatkul': ${typeof namaMatkul}`);

console.log("----------------------------------");
