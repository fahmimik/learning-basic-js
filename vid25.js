// penggunaan loop bersarang untuk membuat pola bintang pohon berdiri
let star = '';
for (let i=0; i<5; i++){ // loop luar untuk baris
 for (let j=0; j<=i; j++){ // loop dalam untuk kolom
        star += '*' // jika true maka bintang akan ditambahkan
 }
 star += '\n';
};
console.log(star);

// penggunaan loop bersarang untuk membuat pola bintang pohon terbalik
let star2 = '';
for (let k=5; k>0; k--){
    for (let l=0; l<k; l++){ // tidak butuh '=' karena nilai k harus lebih dari 0
        star2 += '*';
    }
    star2 += '\n';
}
console.log(star2);

// penggunaan loop bersarang untuk membuat pola bintang pohon setengah berlian
let star3 = '';
for (let m=0; m<10; m++){
    for (let n=0; n<=m; n++){
        star3 += '^';
    }
    star3 += '\n';
}
console.log(star3);
for (let o=9; o>0; o--){
    for (let p=0; p<o; p++){
        star3 += '^';
    }
    star3 += '\n';
}
console.log(star3);