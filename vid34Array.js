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

//3. push (tambah) & pop (hapus)
let array5 = ['budi', 'dani', 'susi'];
array5.push('dimas'); //menambahkan ke index terakhir
console.log(array5.join('+ '));

//4. pop (hapus)
let array6 = ['sun', 'go', 'kong'];
array6.pop(); //menghapus index terakhir dan bukan mengganti dengan undefined
console.log(array6.join(' - '));

//5. unshift (tambah index pertama)
let array7 = ['po', 'ke', 'mon'];
array7.unshift('pikachu'); //menambahkan index pertama
console.log(array7.join(' - '));
//6. shift (hapus index pertama)
let array8 = ['mobil', 'daihatsu', 'fortuner'];
array8.shift(); //menghapus index pertama dan bukan mengganti dengan undefined
console.log(array8.join(' '));
