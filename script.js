function gabungNama() {
    let namadepan = document.getElementById('nama-depan').value;
    let namabelakang = document.getElementById('nama-belakang').value;
    alert(namadepan + namabelakang);
}

function penjumlahanAngka(angka1, angka2, angka3) {
    return angka1 + angka2 + angka3;
}

// function expression
let expressionAngka = function (angka) {
    return 1 + 2 + 3;
}

// Arrow Function
let angkaPanah = (angka1, angka2) => {
    return angka1 + angka2;
}