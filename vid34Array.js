//vid 34 Array
//menampilkan angka 5 pada console
// let myArr = ['teks', 2, true, {nama: 'dimas'}, [4,5,6]];
// console.log(myArr[4][1]); //menampilkan index ke 1 pada array di index ke 4

//-------------------------------------------

//vid 35 Manipulasi Array
//1. menambah elemen pada array
let array1 = [];
array1[0] = 'razan';
array1[1] = 'abi';
console.log(array1);

//2. menghapus elemen pada array
//menghapus secara manual
let array2 = ['dimas', 'abi', 'razan'];
array2[1] = undefined; //mengganti index ke 1 menjadi undefined
console.log(array2);

//3. menampilkan seluruh isi array
let array3 = ['razan', 'abi', 'manyu'];
for (let i = 0; i < array3.length; i++){
    console.log(array3[i]); //menampilkan seluruh isi array
}

//method pada array
//1. join
let array4 = ['razan', 'abi', 'manyu'];
console.log(array4.join('; ')); //pada join, default koma (,), jika ingin diganti, tinggal tambahkan separator didalam join

//2. length sudah ada pada contoh nomor 3

//3. push (tambah)
let array5 = ['budi', 'dani', 'susi'];
array5.push('dimas'); //menambahkan ke index terakhir
console.log(array5.join('+ '));

//4. pop (hapus)
let array6 = ['sun', 'go', 'kong'];
console.log('\n---pop---');
console.log('ini array sebelum menggunakan pop:\n'+array6.join());
array6.pop(); //menghapus index terakhir dan bukan mengganti dengan undefined
console.log(array6.join(' - '));

//5. unshift (tambah index pertama)
console.log('\n---unshift---');
let array7 = ['po', 'ke', 'mon'];
array7.unshift(`'pikachu'`); //menambahkan index pertama
console.log(array7.join(' - '));

//6. shift (hapus index pertama)
console.log('\n---shift---');
let array8 = ['mobil', 'daihatsu', 'fortuner'];
console.log('ini array sebelum menggunakan shift:\n'+array8.join());
array8.shift(); //menghapus index pertama dan bukan mengganti dengan undefined
console.log(array8.join(' '));


//-------------------------------------------

//vid 36 slice , splice
//1. splice (menyisipkan / menghapus index tertentu)
console.log('\n---splice---');
let array9 = ['norman', 'hari', 'yudi', 'tole'];
console.log('ini array sebelum menggunakan splice:\n'+array9.join(' - ')); 
array9.splice(1,0, `'bolot'`); //1 = index ke 1, 0 = tidak ada yang dihapus
array9.splice(2,1); //menambahkan ke 2 = index ke 2, dan 1 = menghapus 1 index setelah index ke 2
console.log(array9.join(' - '));

//2 slice, rumusnya slice(awal,akhir) sehingga index akhir ini tidak termasuk yang diambil
console.log('\n---slice---');
let array10 = ['aku', 'kamu', 'dia', 'kita', 'mereka'];
let array11 = array10.slice(1,3);
console.log('ini array sebelum slice:\n'+array10.join(' - '));
console.log('ini array setelah slice:\n'+array11.join(' + '));
