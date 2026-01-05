//mendaftarkan nilai variabel
const modalAlert = document.getElementById('modal-alert')
const tombolTutup = document.getElementById('tombol-tutup')

//membuat function
//dalam javascript, selain dapat memanggil data ke html melalui eventHandler, juga dapat membuat function.
function tampilkanModalAlert()
{
    //ini fungsi ketika modal-alert di load, maka selector css dengan nama hidden akan dihapus.
    modalAlert.classList.remove("hidden");
}

function tutupModalAlert()
{
    modalAlert.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function(){
    tampilkanModalAlert();
});

tombolTutup.addEventListener("click", tutupModalAlert);

//mengaktifkan javascript pada saat halaman dimuat/load
document.addEventListener("DOMContentLoaded", ()=>{
    //daftarkan variabel burgerBtn
    const burgerBtn = document.getElementById("burgerBtn");
    //daftarkan variabel navlinks
    const navlinks = document.getElementById("navlinks");
    //daftarkan variabel dropdowns
    const dropdowns = document.querySelectorAll("dropdown")
    //daftarkan variabel tombol light/dark mode
    const themeToggle = document.getElementById("themeToggle")
    
    //tampilkan nav ketika tombol diklik
    burgerBtn.addEventListener("click", ()=>{
        //tampilkan kembali navlinks
        navlinks.classList.toggle("show");
        //jika navlinks class nya tidak aktif, maka tutup dropdown nya
        if(!navlinks.classList.contains("show")){
            dropdowns.forEach((d) => d.classlist.remove("open"));
        }
    });
    
    //dark mode
        //cek preferensi sebelumnya
        if(localStorage.getItem("theme") === "dark"){
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️"
        }
    
    //Tombol toggle mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    
        const isDark = document.body.classList.contains("dark-mode");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    
    });
    
    