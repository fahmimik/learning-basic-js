var maxString = 35,
x = prompt('Masukkan nama Anda:');
if (x.length > maxString){
    alert("karakter melebihi batas !");
} else {
    alert('karakter yang anda masukkan berjumlah ' + x.length);
}

console.log(x);



// let conf = confirm('Apakah kamu yakin?');
// if (conf === true){
//     alert('User klik OK!');
// } else if (conf === false) {
//     alert('user klik Cancel');
// } else {
//     alert('user klik selain OK & Cancel');
// }