alert(
  "Hos Geldiniz Az Sonra Sizden Bir Takim Sorular ve Cevaplarini isteyeceğiz!"
);
let sorular = [];
let cevaplar = [];

function islemSec() {
  let secim = prompt(
    "1-Soru Ekle\n" + "2 - Cevap Ekle\n" + "3 - Sonucu Goster\n" + "4 - Cikis"
  );
  switch (secim) {
    case "1":
      soruEkle();
      break;

    case "2":
      cevapEkle();
      break;

    case "3":
      sonucuGoster();
      break;

    case "4":
      cikis();
      break;
  }
}
islemSec();
function soruEkle() {
  let soru = prompt("Soru Giriniz");
  sorular.push(soru);
  islemSec();
}

function cevapEkle() {
  let cevap = prompt("Cevap Giriniz");
  cevaplar.push(cevap);
  islemSec();
}
function sonucuGoster() {
  for (let i = 0; i < sorular.length; i++) {
    alert(sorular[i] + "=" + cevaplar[i]);
  }
  islemSec();
}
function cikis() {
  alert("Cikis Yaptiniz!");
}
