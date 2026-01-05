//mendaftarkan nilai variable
const modalAlert = document.getElementById ('modal-alert');
const tombolTutup = document.getElementById ('tombol-tutup');

//membuat fucntion
//dalam java script, selain memanggil data ke dalam ke html melalui eventHeader, juga dapat membuat fucntion.
function tampilkanModalAlert()
{
    //ini fungsi ketika modal alert do laod maka selector css denagn nama hidden akan dihapus
    modalAlert.classList.remove("hidden");
}

function tutupModalAlert(){
    modalAlert.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function(){
    tampilkanModalAlert();
});

tombolTutup.addEventListener("click", tutupModalAlert);