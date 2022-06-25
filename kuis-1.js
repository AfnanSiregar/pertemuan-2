const nama = ["Muzayyin", "Al-Afnan", "Siregar"];

const myName = nama.map(namae => namae + "Slebew");

console.log(myName);

let namaDepan, namaTengah, namaBelakang;
[namaDepan, namaTengah, namaBelakang] = [myName[0], myName[1], myName[2]];
console.log(namaDepan, namaTengah, namaBelakang);

let mahasiswa = {
    namaLengkap : namaDepan + namaTengah + namaBelakang,
    umur : 20
}

function cetak(cb){
    console.log(mahasiswa.namaLengkap);
    cb();
}

cetak(function(){
    console.log(mahasiswa.umur);
});