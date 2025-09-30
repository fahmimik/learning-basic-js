// Contoh While Sederhana

// var ulang = true;
// while(ulang){
//     console.log('Lampu Kaka');
//     ulang = confirm('lagi?');
// }



// Contoh while dengan increment

// var totalAngkot = 10;
// var i = 1; //nilai awal
// while(i <= totalAngkot){ //berisikan kondisi
//     console.log('Angkot No ' + i + ' beroperasi dengan baik.'); //eksekusi apa dari kondisi diatas
//     i++; // iterasi / perulangan penambahan hingga mencapai kondisi diatas
// }



// contoh for dengan increment

// var totalAngkot = 10;
// var angkotBeroperasi = 6;
// var i = 1;
// for (i; i <= angkotBeroperasi; i++){
//     console.log('Angkotx No. ' + i + ' Beroperasi dengan baik.');
// }

// for(i > angkotBeroperasi; i <= totalAngkot; i++){
//     console.log('Angkot No. ' +i+' Tidak beroperasi');
// }



// contoh penggunaan if

// var input = prompt('Masukkan Angka Anda: ');
// if (input % 2 === 0){
//     alert("\'"+input+"\'"+' Adalah angka bilangan GENAP');
// }   else if (input % 2 === 1){
//     alert("\'"+input+"\'"+ 'adalah angka bilangan Ganjil ');
// } else {
//     alert("\'"+input+"\'"+ ' inputan anda bukan Angka!!!');
// }


//contoh perulangan console angkot
// var totalAngkot = 10;
// var angkotBeroperasi = 6;
// var i = 1;
// for(i;i<=totalAngkot;i++){
//     if(i<=angkotBeroperasi){
//         console.log('angkot ke '+i+' Beroperasi');
//     } else{
//         console.log('angkot ke '+i+' tidak beroperasi');
//     }
// } 

//contoh perulangan consol angkot ada yang lembur (video nomor 23)
// var totalAngkot = 10;
// var angkotBeroperasi = 6;
// var i = 1;
// for(i;i<=totalAngkot;i++){
//     if(i<=angkotBeroperasi && i!==7){
//         console.log('angkot ke '+i+' beroperasi');
//     } else if(i===8 || i===10){
//         console.log('angkot ke '+i+' sedang lembur');
//     } else {
//         console.log('angkot ke '+i+' sedang tidak beroperasi.');
//     }
// }

// contoh video nomor 24 (PENGKONDISIAN : SWITCH pada JAVASCRIPT)
// let input = prompt('masukkan angka anda: ');
// switch (true){
//     case (input % 2 === 0):
//         alert("\'"+input+"\'"+' Adalah angka bilangan GENAP');
//         break;
//     case (input % 2 === 1):
//         alert("\'"+input+"\'"+' Adalah angka bilangan GANJIL');
//         break;
//     default:
//         alert('yang Anda masukkan bukan angka '+'('+input+')');
//         break;
// };
// contoh video nomor 24 (PENGKONDISIAN : SWITCH pada JAVASCRIPT) v2
let item = prompt('masukkan nama makanan / minuman yang ada pada list berikut: \n(nasi, daging, susu, hamburger, softdrink');
switch (item){
    case 'nasi':
    case 'daging':
    case 'susu': 
        alert('makanan / minuman SEHAT');
        break; //--> jika hasil casenya sama dapat menggunakan 1 break
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman KOTOR');
        break; //--> jika hasil casenya sama dapat menggunakan 1 break
    default:
        alert('yang anda inputkan bukan termausk makanan / minuman pada list');
        break;
};