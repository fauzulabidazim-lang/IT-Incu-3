console.log("Hello World");

let abid = "nama saya abid";
console.log(abid);

abid = "salam kenal, saya abid";
console.log(abid);

const namaAplikasi = "Form pendaftaran";
console.log(namaAplikasi);
// namaAplikasi = "Aplikasi belajar Html";
// console.log(namaAplikasi);

const budi = "nama saya budi";
console.log(budi);

function sapa(nama) {
    return 'halo, ${nama}';
}

const pesanMaul = sapa("maul");
const pesanFatur = sapa("fatur");

console.log(pesanMaul);
console.log(pesanFatur);

const pesan = document.querySelector("#pesan");
pesan.textContent = "Pesan ini sudah berubah";

// const judul = document.getElementById("judul");
// const semuaTeks = document.getElementsByClassName("teks");
// const paragraf = document.querySelector(".teks");
// const semuaParagraf = document.querySelectorAll(".teks");

// judul.textContent = "judul sudah berubah";

const nama = document.querySelector("#nama");
const preview = document.querySelector("#preview");

nama.addEventListener("input", () => {
  preview.textContent = nama.value;
});
